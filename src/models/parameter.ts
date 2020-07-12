import UnitType from '~/constants/unitType'
import { chunkString } from '~/util/array'

type Props = {
    name?: string
    basePath: string
    path?: string
    property?: string
    defaultValue?: number
    unitType?: UnitType
    randomRange?: number[]
    speed?: number
    showValue?: boolean
}
export class Parameter {
    name: string
    livePath: string
    property: string
    defaultValue: number
    unitType: UnitType
    randomRange?: number[]
    speed: number
    showValue: boolean
    api?: LiveAPI
    value: number
    min: number
    max: number
    length = 1
    callback?: () => void

    constructor({ name = '', basePath, path = '', property = 'value', defaultValue = 0, unitType = UnitType.FLOAT, randomRange, speed = 1, showValue = false }: Props) {
        this.name = name
        this.livePath = `${basePath} ${path}`
        this.property = property
        this.defaultValue = defaultValue
        // todo: replace unitType with subclasses
        this.unitType = unitType
        this.randomRange = randomRange
        this.speed = speed
        this.showValue = showValue
        this.value = 0
        this.min = 0
        this.max = 1
    }

    getName() {
        return this.name
    }

    getNames() {
        if (this.length === 1) {
            return [this.getName()]
        }

        const namesArray = new Array<string>(this.length).fill('')
        const nameChunks = chunkString(this.getName(), 8)
        for (let i = 0; i < this.length; i++) {
            namesArray[i] = nameChunks[i] || ''
        }
        return namesArray
    }

    getLength() {
        return this.length
    }

    observe() {
        if (this.api) {
            this.api.property = this.property
        }
    }

    ignore() {
        if (this.api) {
            this.api.property = undefined
        }
    }

    onValueChanged(callback: () => void) {
        this.callback = callback
        this.api = new LiveAPI(this.observeValue.bind(this), this.livePath)
    }

    observeValue([property, value]: string[]) {
        if (property !== this.property) {
            return
        }

        this.value = Number(value)

        if (this.callback !== undefined) {
            this.callback()
        }
    }

    getDisplayValue() {
        return Math.round(this.value).toString()
    }

    getDisplayValues() {
        if (this.length === 1) {
            return [this.getDisplayValue()]
        }

        const valuesArray = new Array<string>(this.length).fill('')
        const valueChunks = chunkString(this.getDisplayValue(), 8)
        for (let i = 0; i < this.length; i++) {
            valuesArray[i] = valueChunks[i] || ''
        }
        return valuesArray
    }

    getValue() {
        return this.value
    }

    setValue(value: number) {
        this.value = value

        this.constrainAndSendValue()
    }

    default() {
        this.value = this.defaultValue
        this.constrainAndSendValue()
    }

    random() {
        if (this.randomRange) {
            this.value = this.randomRange[0] + Math.random() * (this.randomRange[1] - this.randomRange[0])
            this.constrainAndSendValue()
        }
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.getOutputValue())
        }
    }

    sendValue(delta: number) {
        this.value += this.getIncrement(delta)

        this.constrainAndSendValue()
    }

    getIncrement(delta: number) {
        return this.speed * (delta < 50 ? delta : delta - 128)
    }

    getOutputValue() {
        return this.unitType === UnitType.FLOAT ? Math.round(this.value * 1000) / 1000 : Math.round(this.value)
    }
}

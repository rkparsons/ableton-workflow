import UnitType from '../constants/unitType'
import log from '~/util/log'

type Props = {
    name: string
    basePath: string
    path: string
    property: string
    defaultValue: number
    unitType: UnitType
    randomRange: number[]
    speed: number
    showValue: boolean
}
export class Parameter {
    name: string
    livePath: string
    property: string
    defaultValue: number
    unitType: UnitType
    randomRange: number[]
    speed: number
    showValue: boolean
    api: LiveAPI | undefined
    value: number
    min: number
    max: number
    callback: (() => void) | undefined

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
        if (callback === undefined) {
            log(`callback undefined ${this.getName()}`)
        }
        this.callback = callback
        this.api = new LiveAPI(this.observeValue, this.livePath)
    }

    observeValue([property, value]: string[]) {
        if (property !== this.property) {
            return
        }

        this.value = Number(value)

        if (this.callback === undefined) {
            log(`callback undefined ${this.getName()}`)
        }

        if (this.callback !== undefined) {
            this.callback()
        }
    }

    getDisplayValue() {
        return Math.round(this.value)
    }

    getValue() {
        return this.value
    }

    setValue(value: number) {
        this.value = value

        this.constrainAndSendValue()
    }

    default() {
        //todo: remove breaks related check
        if (this.name !== 'BPM') {
            this.value = this.defaultValue
            this.constrainAndSendValue()
        }
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

import UnitType from '~/constants/unitType'
import { ValueParameter } from '~/models/valueParameter'

type Props = {
    name: string
    basePath: string
    path: string
    pathDecimal: string
    property?: string
    defaultValue?: number
    unitType?: UnitType
    inputRange: number[]
    randomRange?: number[]
}

export class RepitchParameter extends ValueParameter {
    livePathDecimal: string
    apiDecimal?: LiveAPI

    constructor({ name, basePath, path, pathDecimal, property, defaultValue, unitType, inputRange, randomRange }: Props) {
        super({ name, basePath, path, property, defaultValue, unitType, inputRange, randomRange })
        this.livePathDecimal = `${basePath} ${pathDecimal}`
    }

    onValueChanged(callback: () => void) {
        this.callback = callback
        this.api = new LiveAPI(this.observeValue.bind(this), this.livePath)
        this.api.property = this.property

        this.apiDecimal = new LiveAPI(this.observeValueDecimal.bind(this), this.livePathDecimal)
        this.apiDecimal.property = this.property
    }

    observeValue([property, newValue]: string[]) {
        if (property !== this.property) {
            return
        }

        this.value = Number(newValue) + (this.value % 1)

        if (this.callback !== undefined) {
            this.callback()
        }
    }

    observeValueDecimal([property, newValue]: string[]) {
        if (property !== this.property) {
            return
        }

        this.value = Math.round(this.value) + Number(newValue) / 100

        if (this.callback !== undefined) {
            this.callback()
        }
    }

    getDisplayValue() {
        return (Math.round(this.value * 100) / 100).toString()
    }

    getIncrement(delta: number) {
        return delta < 50 ? 0.1 : -0.1
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        const remainder = this.value % 1
        const coarse = Math.abs(remainder) > 0.5 ? Math.round(this.value) : remainder > 0 ? Math.floor(this.value) : Math.ceil(this.value)
        const decimal = remainder < -0.5 ? remainder + 1 : remainder > 0.5 ? remainder - 1 : remainder
        const fine = Math.round(100 * decimal)

        if (this.api && this.apiDecimal) {
            this.api.set(this.property, coarse)
            this.apiDecimal.set(this.property, fine)
        }
    }
}

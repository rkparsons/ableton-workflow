import { ValueParameter } from './valueParameter'

export class RepitchParameter extends ValueParameter {
    constructor(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        super(displayName, livePath, property, defaultValue, unitType, inputRange, randomRange)
        this.livePathDecimal = livePathDecimal
    }

    onValueChanged(callback) {
        this.callback = callback
        this.api = new LiveAPI(null, this.livePath)
        this.api.property = this.property

        this.apiDecimal = new LiveAPI(null, this.livePathDecimal)
        this.apiDecimal.property = this.property
    }

    // observeValue([property, newValue]) {
    //     if (property === this.property) {
    //         this.value = newValue + (this.value % 1)
    //         this.callback()
    //     }
    // }

    // observeValueDecimal([property, newValue]) {
    //     if (property === this.property) {
    //         this.value = Math.round(this.value) + newValue / 100
    //         this.callback()
    //     }
    // }

    getDisplayValue() {
        return Math.round(this.value * 100) / 100
    }

    getIncrement(delta) {
        return delta < 50 ? 0.1 : -0.1
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        const remainder = this.value % 1
        const coarse = Math.abs(remainder) > 0.5 ? Math.round(this.value) : remainder > 0 ? Math.floor(this.value) : Math.ceil(this.value)
        const decimal = remainder < -0.5 ? remainder + 1 : remainder > 0.5 ? remainder - 1 : remainder
        const fine = Math.round(100 * decimal)

        if (this.api) {
            this.api.set(this.property, coarse)
            this.apiDecimal.set(this.property, fine)
        }
    }
}

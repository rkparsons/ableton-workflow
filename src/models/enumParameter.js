import { Parameter } from './parameter'
import unitType from '../constants/unitType'

export class EnumParameter extends Parameter {
    constructor(displayName, livePath, property, defaultValue, options, randomRange) {
        super(displayName, livePath, property, defaultValue, unitType.ENUM)
        this.options = options
        this.optionKeys = Object.keys(options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = randomRange || [this.min, this.max]
        this.speed = 0.05
    }

    increment() {
        this.value += 1
        this.constrainAndSendValue()
    }

    decrement() {
        this.value -= 1
        this.constrainAndSendValue()
    }

    getDisplayValue() {
        return this.options[Math.round(this.value)]
    }
}

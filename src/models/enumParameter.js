import { Parameter } from './parameter'
import unitType from '../constants/unitType'

export class EnumParameter extends Parameter {
    // todo: use same prop for inputRange and options
    // todo: replace isX flags with subclasses
    constructor({ name, basePath, path, property, defaultValue, options = [], randomRange, isCategory }) {
        super({ name, basePath, path, property, defaultValue, unitType: unitType.ENUM, speed: 0.05 })
        this.options = options
        this.optionKeys = Object.keys(options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = randomRange || [this.min, this.max]
        this.isCategory = isCategory
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

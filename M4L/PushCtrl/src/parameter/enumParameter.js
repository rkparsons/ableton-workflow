import { defclass } from '../util'
import { Parameter } from './Parameter'
import { unitType } from '../constants'

// replace with ES6 classes
export const EnumParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, defaultValue, options, randomRange) {
        Parameter.call(this, displayName, livePath, property, defaultValue, unitType.ENUM)
        this.options = options
        this.optionKeys = Object.keys(options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = randomRange || [this.min, this.max]
        this.speed = 0.05
    }

    this.increment = function() {
        this.value += 1
        this.constrainAndSendValue()
    }

    this.decrement = function() {
        this.value -= 1
        this.constrainAndSendValue()
    }

    this.getDisplayValue = function() {
        return this.options[Math.round(this.value)]
    }
})

const { defclass, denormaliseTimeValue } = require('util')
const { Parameter } = require('Parameter')
const constants = require('constants')

exports.ValueParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, unitType, unitStyle, inputRange, displayRange) {
        Parameter.call(this, displayName, livePath, property, unitType)
        this.unitStyle = unitStyle
        this.inputRange = inputRange
        this.displayRange = displayRange
        this.min = this.inputRange[0]
        this.max = this.inputRange[1]
    }

    this.getDisplayValue = function() {
        var value = this.value

        //todo: refactor into helper class
        if (this.unitStyle === constants.unitStyle.TIME && this.displayRange) {
            log(value)
            value = denormaliseTimeValue(this.value, this.displayRange[0], this.displayRange[1])
            log(value)
        } else if (this.displayRange) {
            value = ((value - this.inputRange[0]) * (this.displayRange[1] - this.displayRange[0])) / (this.inputRange[1] - this.inputRange[0]) + this.displayRange[0]
        }

        if (this.unitType === constants.unitType.INT) {
            return Math.round(value)
        } else {
            return Math.round(value * 1000) / 1000
        }
    }

    this.getIncrement = function(delta) {
        return ((this.max - this.min) * (delta < 50 ? delta : delta - 128)) / 100
    }
})

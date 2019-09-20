const { Parameter } = require('Parameter')
const constants = require('constants')

exports.ValueParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, unitType, inputRange, displayRange) {
        Parameter.call(this, displayName, livePath, property, unitType)
        this.inputRange = inputRange
        this.displayRange = displayRange
        this.min = this.inputRange[0]
        this.max = this.inputRange[1]
    }

    this.getDisplayValue = function() {
        var value = this.value

        if (this.displayRange) {
            value = ((value - this.inputRange[0]) * (this.displayRange[1] - this.displayRange[0])) / (this.inputRange[1] - this.inputRange[0]) + this.displayRange[0]
        }

        if (this.unitType === constants.unitType.INT) {
            return Math.round(value)
        } else {
            return Math.round(value * 100) / 100
        }
    }
})

const { defclass, scaleTime, scaleLinear, formatTime, formatPercent, formatNumber } = require('util')
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
        if (this.value === null) {
            return ''
        }

        if (this.unitStyle === constants.unitStyle.TIME) {
            return formatTime(scaleTime(this.value, this.displayRange), this.unitType)
        }

        if (this.unitStyle === constants.unitStyle.PERCENT) {
            return formatPercent(scaleLinear(this.value, this.inputRange, this.displayRange), this.unitType)
        }

        return formatNumber(scaleLinear(this.value, this.inputRange, this.displayRange), this.unitType)
    }

    this.getIncrement = function(delta) {
        return ((this.max - this.min) * (delta < 50 ? delta : delta - 128)) / 100
    }
})

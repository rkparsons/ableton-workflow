const { defclass } = require('util')
const { Parameter } = require('Parameter')
const ASCII = require('constants').ascii

exports.ValueParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, unitType, inputRange) {
        Parameter.call(this, displayName, livePath, property, unitType)
        this.inputRange = inputRange
        this.min = this.inputRange[0]
        this.max = this.inputRange[1]
    }

    this.getDisplayValue = function() {
        if (!this.value) {
            return ''
        }

        const fraction = this.value / (this.max - this.min)
        const fullBars = Math.floor(8 * fraction)
        const isHalfBar = (8 * fraction) % 1 >= 0.5
        const padding = String.fromCharCode(ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR, ASCII.EMPTY_BAR)
        var output = ''

        for (var i = 0; i < fullBars; i++) {
            output += String.fromCharCode(ASCII.FULL_BAR)
        }

        if (isHalfBar) {
            output += String.fromCharCode(ASCII.HALF_BAR)
        }

        return (output + padding).slice(0, 8)
    }

    this.getIncrement = function(delta) {
        return ((this.max - this.min) * (delta < 50 ? delta : delta - 128)) / 100
    }
})

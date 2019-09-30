import { defclass } from '../util'
import { Parameter } from './Parameter'
import { ascii } from '../constants'

export const ValueParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, defaultValue, unitType, inputRange, randomRange) {
        Parameter.call(this, displayName, livePath, property, defaultValue, unitType, randomRange)
        this.inputRange = inputRange
        this.min = this.inputRange[0]
        this.max = this.inputRange[1]
        this.isBipolar = this.max / this.min < 0
    }

    this.getDisplayValue = function() {
        if (!this.value) {
            return ' '
        }

        const barCount = this.isBipolar ? 4 : 8
        const padding = String.fromCharCode(ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS, ascii.EMPTY_BARS)
        const outputPositive = this.isBipolar && this.value < 0 ? '' : getMeterOutput(true, barCount, this.value / this.max)
        const outputNegative = this.isBipolar && this.value > 0 ? '' : getMeterOutput(false, barCount, this.min === 0 ? 0 : this.value / this.min)

        if (this.isBipolar) {
            return (padding + outputNegative).slice(-4) + (outputPositive + padding).slice(0, 4)
        } else {
            return (outputPositive + padding).slice(0, 8)
        }
    }

    this.getIncrement = function(delta) {
        return ((this.max - this.min) * (delta < 50 ? delta : delta - 128)) / 100
    }

    function getMeterOutput(isPositive, barCount, fraction) {
        const fullBars = Math.floor(barCount * fraction)
        const isHalfBar = Math.abs(barCount * fraction) % 1 >= 0.5
        var output = ''

        if (!isPositive && isHalfBar) {
            output += String.fromCharCode(ascii.MINUS_BAR)
        }

        for (var i = 0; i < fullBars; i++) {
            output += String.fromCharCode(ascii.TWO_BARS)
        }

        if (isPositive && isHalfBar) {
            output += String.fromCharCode(ascii.PLUS_BAR)
        }

        return output
    }
})
const { defclass } = require('util')
const { Parameter } = require('Parameter')

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

        const segment = Math.round((8 * this.value) / (this.max - this.min))

        if (segment === 0) return '--------'
        if (segment === 1) return '|-------'
        if (segment === 2) return '-|------'
        if (segment === 3) return '--|-----'
        if (segment === 4) return '---|----'
        if (segment === 5) return '----|---'
        if (segment === 6) return '-----|--'
        if (segment === 7) return '------|-'
        if (segment === 8) return '-------|'
    }

    this.getIncrement = function(delta) {
        return ((this.max - this.min) * (delta < 50 ? delta : delta - 128)) / 100
    }
})

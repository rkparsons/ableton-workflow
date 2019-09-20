const { Parameter } = require('Parameter')
const constants = require('constants')

exports.EnumParameter = defclass(Parameter, function() {
    this.constructor = function(displayName, livePath, property, options) {
        Parameter.call(this, displayName, livePath, property, constants.unitType.ENUM)
        this.options = options
        this.optionKeys = Object.keys(options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.speed = 0.05
    }

    this.getDisplayValue = function() {
        return this.options[Math.round(this.value)]
    }
})

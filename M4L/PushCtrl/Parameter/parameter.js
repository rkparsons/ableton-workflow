const { defclass } = require('util')
const constants = require('constants')

exports.Parameter = defclass(Object, function() {
    this.constructor = function(displayName, livePath, property, defaultValue, unitType) {
        this.displayName = displayName
        this.livePath = livePath
        this.property = property
        this.defaultValue = defaultValue || 0
        this.unitType = unitType
        this.speed = 1
        this.api = null
        this.value = null
        this.callback = null
    }

    this.onValueChanged = function(callback) {
        this.callback = callback
        this.api = new LiveAPI(this.observeValue.bind(this), this.livePath)
        this.api.property = this.property
    }

    this.observeValue = function(args) {
        if (args[0] === this.property) {
            this.value = args[1]
            this.callback()
        }
    }

    this.getDisplayName = function() {
        return this.displayName
    }

    this.getDisplayValue = function() {
        return Math.round(this.value)
    }

    this.default = function() {
        this.value = this.defaultValue
        this.api.set(this.property, this.getOutputValue())
    }

    this.sendValue = function(delta) {
        this.value += this.getIncrement(delta)
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        this.api.set(this.property, this.getOutputValue())
    }

    this.getIncrement = function(delta) {
        return this.speed * (delta < 50 ? delta : delta - 128)
    }

    this.getOutputValue = function() {
        return this.unitType === constants.unitType.FLOAT ? Math.round(this.value * 1000) / 1000 : Math.round(this.value)
    }
})

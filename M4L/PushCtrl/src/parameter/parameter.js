import { defclass } from '../util'
import { unitType } from '../constants'

//todo: refactor to es6 class
export const Parameter = defclass(Object, function() {
    this.constructor = function(name, livePath, property, defaultValue, unitType, randomRange) {
        this.name = name
        this.livePath = livePath
        this.property = property
        this.defaultValue = defaultValue || 0
        this.unitType = unitType
        this.randomRange = randomRange
        this.speed = 1
        this.api = null
        this.value = null
        this.callback = null
    }

    this.getName = function() {
        return this.name
    }

    this.observe = function() {
        this.api.property = this.property
    }

    this.ignore = function() {
        this.api.property = null
    }

    this.onValueChanged = function(callback) {
        this.callback = callback
        this.api = new LiveAPI(this.observeValue.bind(this), this.livePath)
    }

    this.observeValue = function(args) {
        if (args[0] === this.property) {
            this.value = args[1]
            this.callback()
        }
    }

    this.getDisplayValue = function() {
        return Math.round(this.value)
    }

    this.getValue = function() {
        return this.value
    }

    this.setValue = function(value) {
        this.value = value
        this.constrainAndSendValue()
    }

    this.default = function() {
        this.value = this.defaultValue
        this.constrainAndSendValue()
    }

    this.random = function() {
        if (this.randomRange) {
            this.value = this.randomRange[0] + Math.random() * (this.randomRange[1] - this.randomRange[0])
            this.constrainAndSendValue()
        }
    }

    this.constrainAndSendValue = function() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.getOutputValue())
        }
    }

    this.sendValue = function(delta) {
        this.value += this.getIncrement(delta)
        this.constrainAndSendValue()
    }

    this.getIncrement = function(delta) {
        return this.speed * (delta < 50 ? delta : delta - 128)
    }

    this.getOutputValue = function() {
        return this.unitType === unitType.FLOAT ? Math.round(this.value * 1000) / 1000 : Math.round(this.value)
    }
})

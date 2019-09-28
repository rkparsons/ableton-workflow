const { defclass } = require('util')
const { EnumParameter } = require('EnumParameter')
const { deferLow } = require('util')

exports.FilteredEnumParameter = defclass(EnumParameter, function() {
    this.constructor = function(displayName, livePath, property, defaultValue, optionGroups) {
        const optionGroupKey = Object.keys(optionGroups)[0]
        EnumParameter.call(this, displayName, livePath, property, defaultValue, optionGroups[optionGroupKey])
        this.optionGroups = optionGroups
    }

    this.filterOptions = function(optionGroupKey) {
        this.value = 0
        this.options = this.optionGroups[optionGroupKey]
        this.optionKeys = Object.keys(this.options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = [this.min, this.max]
    }
})

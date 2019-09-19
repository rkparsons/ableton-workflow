include('EnumParameter')

var FilteredEnumParameter = defclass(EnumParameter, function() {
    this.constructor = function(displayName, livePath, property, optionGroups) {
        const optionGroupKey = Object.keys(optionGroups)[0]
        EnumParameter.call(this, displayName, livePath, property, optionGroups[optionGroupKey])
        this.optionGroups = optionGroups
    }

    this.filterOptions = function(optionGroupKey) {
        this.options = this.optionGroups[optionGroupKey]
        this.optionKeys = Object.keys(this.options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
    }
})

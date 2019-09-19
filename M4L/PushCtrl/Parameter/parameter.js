function Parameter(displayName, livePath, property) {
    this.displayName = displayName
    this.livePath = livePath
    this.property = property

    this.api = null
    this.value = null
    this.callback = null

    this.onValueChanged = function(callback) {
        this.callback = callback
        this.api = new LiveAPI(this._observeValue.bind(this), this.livePath)
        this.api.property = this.property
    }

    this.sendValue = function(delta) {
        this.value += this._getIncrement(delta)
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        this.api.set(this.property, this._getOutputValue())
    }

    this.getDisplayName = function() {
        return this.displayName
    }

    this._observeValue = function(args) {
        if (args[0] === this.property) {
            this.value = args[1]
            this.callback()
        }
    }
}

function ValueParameter(displayName, livePath, property, unitType, inputRange, displayRange) {
    Parameter.call(this, displayName, livePath, property)
    this.unitType = unitType
    this.inputRange = inputRange
    this.displayRange = displayRange
    this.min = this.inputRange[0]
    this.max = this.inputRange[1]

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

    this._getOutputValue = function() {
        return this.unitType === constants.unitType.INT ? Math.round(this.value) : this.value
    }

    this._getIncrement = function(delta) {
        return delta < 50 ? delta : delta - 128
    }
}

function EnumParameter(displayName, livePath, property, options) {
    Parameter.call(this, displayName, livePath, property)
    this.options = options
    this.optionKeys = Object.keys(options)
    this.min = this.optionKeys[0]
    this.max = this.optionKeys[this.optionKeys.length - 1]
    this.speed = 0.05

    this.getDisplayValue = function() {
        return this.options[Math.round(this.value)]
    }

    this._getOutputValue = function() {
        return Math.round(this.value)
    }

    this._getIncrement = function(delta) {
        return 0.05 * (delta < 50 ? delta : delta - 128)
    }
}

function FilteredEnumParameter(displayName, livePath, property, optionGroups) {
    Parameter.call(this, displayName, livePath, property)
    this.optionGroups = optionGroups
    this.optionGroupKey = null

    this.optionKeys = null
    this.min = null
    this.max = null

    this.speed = 0.05

    this.getDisplayValue = function() {
        if (this.options) {
            return this.options[Math.round(this.value)]
        }
    }

    this.filterOptions = function(optionGroupKey) {
        this.optionGroupKey = optionGroupKey

        this._applyFilter()
    }

    this._applyFilter = function() {
        this.options = this.optionGroups[this.optionGroupKey]
        this.optionKeys = Object.keys(this.options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
    }

    this._getOutputValue = function() {
        return Math.round(this.value)
    }

    this._getIncrement = function(delta) {
        return 0.05 * (delta < 50 ? delta : delta - 128)
    }
}

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
        this.value += delta < 50 ? delta : delta - 128
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
            return Math.floor(value)
        } else {
            return Math.round(value * 100) / 100
        }
    }

    this._getOutputValue = function() {
        return this.unitType === constants.unitType.INT ? Math.floor(this.value) : this.value
    }
}

function EnumParameter(displayName, livePath, property, options) {
    Parameter.call(this, displayName, livePath, property)
    this.options = options
    this.optionKeys = Object.keys(options)
    this.min = this.optionKeys[0]
    this.max = this.optionKeys[this.optionKeys.length - 1]

    this.getDisplayValue = function() {
        return this.options[Math.floor(this.value)]
    }

    this._getOutputValue = function() {
        return Math.floor(this.value)
    }
}

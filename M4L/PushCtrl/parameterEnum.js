function ParameterEnum(displayName, livePath, property, options) {
    this.displayName = displayName
    this.livePath = livePath
    this.property = property
    this.options = options
    this.optionKeys = Object.keys(options)
    this.min = this.optionKeys[0]
    this.max = this.optionKeys[this.optionKeys.length - 1]

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

        this.api.set(this.property, Math.floor(this.value))
    }

    this.getDisplayName = function() {
        return this.displayName
    }

    this.getDisplayValue = function() {
        return this.options[Math.floor(this.value)]
    }

    this._observeValue = function(args) {
        if (args[0] === this.property) {
            this.value = args[1]
            this.callback()
        }
    }
}

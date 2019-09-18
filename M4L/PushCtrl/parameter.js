function Parameter(name, config, livePath) {
    this.name = name
    this.livePath = livePath
    this.config = config
    // this.min = min
    // this.max = max
    this.api = null
    this.value = null

    this.onValueChanged = function(callback) {
        this.api = new LiveAPI(function(args) {
            this.value = args[1]
            callback()
        }, this.livePath)
    }

    this.updateValue = function(delta) {
        // this.value += (delta < 50 ? delta : delta - 128) / 100
        // this.value = Math.max(this.min, this.value)
        // this.value = Math.min(this.max, this.value)
    }

    this.getDisplayValue = function() {
        return Math.round(this.value * 100) / 100
    }
}

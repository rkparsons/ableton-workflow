exports.parameter = function(parameterName, callback) {
    const config = require('parameterConfig')[parameterName]

    return new Parameter(config, callback)
}

function Parameter(config, callback) {
    this.name = config.name
    this.min = config.min
    this.max = config.max

    this.api = new LiveAPI(function(args) {
        this.value = args[1]
        callback()
    }, livePath)
    this.api.property = config.liveProperty

    this.updateValue = function(delta) {
        this.value += (delta < 50 ? delta : delta - 128) / 100
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)
    }

    this.getDisplayValue = function() {
        return Math.round(this.value * 100) / 100
    }
}

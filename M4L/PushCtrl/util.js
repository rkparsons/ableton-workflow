const constants = require('constants')

exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

exports.scaleLinear = function(value, inputRange, outputRange) {
    return ((value - inputRange[0]) * (outputRange[1] - outputRange[0])) / (inputRange[1] - inputRange[0]) + outputRange[0]
}

exports.scaleTime = function(inputValue, displayRange) {
    if (!displayRange) {
        return inputValue
    }

    var milliseconds = inputValue

    milliseconds = -0.9633625 + 0.1029236 * Math.exp(12.17793 * inputValue)
    milliseconds = Math.max(displayRange[0], milliseconds)
    milliseconds = Math.min(displayRange[1], milliseconds)
    milliseconds = Math.round(milliseconds * 100) / 100

    return milliseconds
}

exports.formatNumber = function(number, unitType) {
    return unitType === constants.unitType.INT ? number.round(0) : number.round(1)
}

exports.formatPercent = function(percent, unitType) {
    const decimals = unitType === constants.unitType.INT ? 0 : 1

    return percent.round(decimals) + ' %'
}

exports.formatTime = function(milliseconds, unitType) {
    const decimals = unitType === constants.unitType.INT ? 0 : 1

    return milliseconds < 1000 ? milliseconds.round(decimals) + ' ms' : (milliseconds / 1000).round(decimals) + ' s'
}

Number.prototype.round = function(decimals) {
    return +(Math.round(this + 'e+' + decimals) + 'e-' + decimals)
}

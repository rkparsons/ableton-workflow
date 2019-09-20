exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

exports.scaleAndFormatMilliseconds = function(inputValue, displayRange) {
    var result = inputValue

    if (displayRange) {
        result = -0.9633625 + 0.1029236 * Math.exp(12.17793 * inputValue)
        result = Math.max(displayRange[0], result)
        result = Math.min(displayRange[1], result)
        result = Math.round(result * 100) / 100
    }

    return result < 1000 ? result.round(1) + ' ms' : (result / 1000).round(1) + ' s'
}

exports.scaleLinear = function(value, inputRange, outputRange) {
    return ((value - inputRange[0]) * (outputRange[1] - outputRange[0])) / (inputRange[1] - inputRange[0]) + outputRange[0]
}

Number.prototype.round = function(decimals) {
    return +(Math.round(this + 'e+' + decimals) + 'e-' + decimals)
}

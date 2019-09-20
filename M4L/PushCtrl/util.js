exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

exports.denormaliseTimeValue = function(inputValue, min, max) {
    var result = -0.9633625 + 0.1029236 * Math.exp(12.17793 * inputValue)

    result = Math.max(min, result)
    result = Math.min(max, result)

    return Math.round(result * 1000) / 1000
}

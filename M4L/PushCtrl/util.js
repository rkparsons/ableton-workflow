exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

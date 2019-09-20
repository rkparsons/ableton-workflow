exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

exports.log = function() {
    for (var i = 0, len = arguments.length; i < len; i++) {
        var message = arguments[i]
        if (message && message.toString) {
            var s = message.toString()
            if (s.indexOf('[object ') >= 0) {
                s = JSON.stringify(message)
            }
            post(s)
        } else if (message === null) {
            post('<null>')
        } else {
            post(message)
        }
    }
    post('\n')
}

export function defclass(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

export function deferLow(task) {
    this.allowExecution = false

    new Task(function() {
        if (this.allowExecution) {
            task()

            arguments.callee.task.cancel()
        }

        this.allowExecution = true
    }, this).execute()
}

export function log() {
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

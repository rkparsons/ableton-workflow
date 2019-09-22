exports.defclass = function(base, body) {
    const prototype = Object.create(base.prototype)
    body.call(prototype, base.prototype)
    prototype.constructor.prototype = prototype

    return prototype.constructor
}

exports.deferLow = function(task) {
    this.allowExecution = false

    new Task(function() {
        if (this.allowExecution) {
            task()

            arguments.callee.task.cancel()
        }

        this.allowExecution = true
    }, this).execute()
}

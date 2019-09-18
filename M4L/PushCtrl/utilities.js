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

// exports.setTimeout = function(task, timeout) {
//     this.allowExecution = false

//     var tsk = new Task(function() {
//         if (this.allowExecution) {
//             task()

//             arguments.callee.task.cancel()
//         }

//         this.allowExecution = true
//     }, this)

//     tsk.interval = timeout
//     tsk.repeat(2)
// }

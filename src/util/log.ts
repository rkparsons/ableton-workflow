declare const post: any

export default function(message: string) {
    for (var i = 0, len = arguments.length; i < len; i++) {
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

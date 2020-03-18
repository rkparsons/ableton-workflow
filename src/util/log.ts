export default function(messages: string | string[]) {
    if (typeof messages === 'string') {
        messages = <string[]>[messages]
    }

    messages.forEach(message => {
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
    })
    post('\n')
}

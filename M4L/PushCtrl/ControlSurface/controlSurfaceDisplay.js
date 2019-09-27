const ASCII = require('constants').ascii

exports.ControlSurfaceDisplay = function(getControl) {
    const x = ASCII.ELLIPSIS
    this.padding = String.fromCharCode(x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x)

    this.displayApi = []

    this.displayApi[0] = new LiveAPI(function() {}, getControl('Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControl('Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, getControl('Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, getControl('Display_Line_3'))

    this.line = function(lineIndex, values) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values))
    }

    this.menu = function(lineIndex, values, selectedIndex) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values, selectedIndex))
    }

    this.title = function(lineIndex, values) {
        var output = String.fromCharCode(x, x)

        for (i in values) {
            output += values[i] + String.fromCharCode(x)
        }

        output += this.padding

        this.displayApi[lineIndex].call('display_message', output.slice(0, 68))
    }

    function createDisplayMessage(messageItems, selectedIndex) {
        const paddingEnd = '        '
        var itemsPadded = ''

        for (i in messageItems) {
            if (i == selectedIndex) {
                itemsPadded += String.fromCharCode(ASCII.ARROW_RIGHT)
            }
            itemsPadded += (messageItems[i] + paddingEnd).slice(0, 8)
            itemsPadded += i % 2 === 0 ? ' ' : ''
        }

        return itemsPadded
    }
}

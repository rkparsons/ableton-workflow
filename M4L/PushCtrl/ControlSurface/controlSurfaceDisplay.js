exports.ControlSurfaceDisplay = function(getControl) {
    this.displayApi = []

    this.displayApi[0] = new LiveAPI(function() {}, getControl('Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControl('Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, getControl('Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, getControl('Display_Line_3'))

    this.line = function(lineIndex, values) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values))
    }

    function createDisplayMessage(messageItems) {
        const paddingEnd = '        '
        var itemsPadded = ''

        for (i in messageItems) {
            itemsPadded += (messageItems[i] + paddingEnd).slice(0, 8)
            itemsPadded += i % 2 === 0 ? ' ' : ''
        }

        return itemsPadded
    }
}

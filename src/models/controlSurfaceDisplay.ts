import ASCII from '~/constants/ascii'
import ControlName from '~/constants/controlName'

export function ControlSurfaceDisplay(this: any, getControl: (controlName: ControlName) => string) {
    this.padding = String.fromCharCode(...new Array<number>(66).fill(ASCII.ELLIPSIS))

    this.displayApi = []

    this.displayApi[0] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_0))
    this.displayApi[1] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_1))
    this.displayApi[2] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_2))
    this.displayApi[3] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_3))

    this.line = function(lineIndex: number, values: string[]) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values))
    }

    this.menu = function(lineIndex: number, values: string[], selectedIndex: number) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values, selectedIndex))
    }

    this.title = function(lineIndex: number, values: string[]) {
        let output = String.fromCharCode(ASCII.ELLIPSIS, ASCII.ELLIPSIS)

        values.forEach(value => {
            output += value + String.fromCharCode(ASCII.ELLIPSIS)
        })

        output += this.padding

        this.displayApi[lineIndex].call('display_message', output.slice(0, 68))
    }

    function createDisplayMessage(messageItems: string[], selectedIndex?: number) {
        const paddingEnd = '        '
        let itemsPadded = ''

        messageItems.forEach((messageItem, index) => {
            const prefix = selectedIndex === undefined ? '' : index == selectedIndex ? String.fromCharCode(ASCII.ARROW_RIGHT) : ' '
            itemsPadded += (prefix + messageItem + paddingEnd).slice(0, 8)
            itemsPadded += index % 2 === 0 ? ' ' : ''
        })

        return itemsPadded
    }
}

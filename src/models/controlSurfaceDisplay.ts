import ASCII from '~/constants/ascii'
import ControlName from '~/constants/controlName'
import DisplayApiMethod from '~/constants/displayApiMethod'

export class ControlSurfaceDisplay {
    padding: string
    displayApi: LiveAPI[]

    constructor(getControl: (controlName: ControlName) => string) {
        this.padding = String.fromCharCode(...new Array<number>(66).fill(ASCII.ELLIPSIS))

        this.displayApi = []

        this.displayApi[0] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_0))
        this.displayApi[1] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_1))
        this.displayApi[2] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_2))
        this.displayApi[3] = new LiveAPI(function() {}, getControl(ControlName.DISPLAY_LINE_3))
    }

    line(lineIndex: number, values: string[]) {
        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, values.length === 1 ? values : this.createDisplayMessage(values))
    }

    menu(lineIndex: number, values: string[], selectedIndex: number) {
        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, values.length === 1 ? values : this.createDisplayMessage(values, selectedIndex))
    }

    title(lineIndex: number, values: string[]) {
        let output = String.fromCharCode(ASCII.ELLIPSIS, ASCII.ELLIPSIS)

        values.forEach(value => {
            output += value + String.fromCharCode(ASCII.ELLIPSIS)
        })

        output += this.padding

        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, output.slice(0, 68))
    }

    createDisplayMessage(messageItems: string[], selectedIndex?: number) {
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
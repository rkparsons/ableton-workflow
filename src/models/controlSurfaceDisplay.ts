import ASCII from '~/constants/ascii'
import ControlName from '~/constants/controlName'
import DisplayApiMethod from '~/constants/displayApiMethod'

export class ControlSurfaceDisplay {
    padding: string
    displayApi: LiveAPI[]

    constructor(getControl: (controlName: ControlName) => string) {
        this.padding = String.fromCharCode(...new Array<number>(66).fill(ASCII.ELLIPSIS))

        this.displayApi = []

        this.displayApi[0] = new LiveAPI(function () {}, getControl(ControlName.DISPLAY_LINE_0))
        this.displayApi[1] = new LiveAPI(function () {}, getControl(ControlName.DISPLAY_LINE_1))
        this.displayApi[2] = new LiveAPI(function () {}, getControl(ControlName.DISPLAY_LINE_2))
        this.displayApi[3] = new LiveAPI(function () {}, getControl(ControlName.DISPLAY_LINE_3))
    }

    line(lineIndex: number, values: string[], isFirstMessageItemDoubleLength = false) {
        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, values.length === 1 ? values : this.createDisplayMessage(values, undefined, isFirstMessageItemDoubleLength))
    }

    menu(lineIndex: number, values: string[], selectedIndex?: number) {
        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, values.length === 1 ? values : this.createDisplayMessage(values, selectedIndex))
    }

    title(lineIndex: number, values: string[], subPageIndex?: number, subPageCount?: number) {
        let output = String.fromCharCode(ASCII.ELLIPSIS, ASCII.ELLIPSIS)

        values.forEach((value) => {
            output += value + String.fromCharCode(ASCII.ELLIPSIS)
        })

        output = (output + this.padding).slice(0, 68)
        if (subPageIndex !== undefined && subPageCount !== undefined && subPageCount > 1) {
            output = subPageCount === 1 ? output.slice(0, 68) : output.slice(0, 63) + `${subPageIndex + 1}/${subPageCount}` + String.fromCharCode(ASCII.ELLIPSIS, ASCII.ELLIPSIS)
        }

        this.displayApi[lineIndex].call(DisplayApiMethod.DISPLAY_MESSAGE, output)
    }

    // todo: generalise this for long params of different lengths at different positions
    createDisplayMessage(messageItems: string[], selectedIndex?: number, isFirstMessageItemDoubleLength = false) {
        const paddingEnd = '        '
        let itemsPadded = ''

        messageItems.slice(0, 8).forEach((messageItem, index) => {
            const prefix = selectedIndex === undefined ? '' : index == selectedIndex ? String.fromCharCode(ASCII.ARROW_RIGHT) : ' '
            itemsPadded += (prefix + messageItem + paddingEnd).slice(0, 8)

            if (!isFirstMessageItemDoubleLength || index > 0) {
                itemsPadded += index % 2 === 0 ? ' ' : ''
            }
            if (isFirstMessageItemDoubleLength && index === 1) {
                itemsPadded += ' '
            }
        })

        return itemsPadded
    }
}

import { Parameter } from '~/models/parameter'

export class Blank extends Parameter {
    constructor() {
        super({
            name: '',
            basePath: '',
            path: '',
        })
    }

    observe() {}

    ignore() {}

    onValueChanged() {}

    getDisplayValue() {
        return ''
    }

    getValue() {
        return 0
    }

    setValue() {}

    default() {}

    random() {}

    constrainAndSendValue() {}

    sendValue() {}

    getOutputValue() {
        return 0
    }
}

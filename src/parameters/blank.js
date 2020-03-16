/* eslint-disable */

import { Parameter } from '../models/parameter'

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

    onValueChanged(callback) {}

    getDisplayValue() {
        return ''
    }

    getValue() {
        return ''
    }

    setValue(value) {}

    default() {}

    random() {}

    constrainAndSendValue() {}

    sendValue(delta) {}

    getOutputValue() {
        return ''
    }
}

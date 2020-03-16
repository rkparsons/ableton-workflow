/* eslint-disable */

export class ParameterPage {
    constructor(index, name, parameters) {
        this.index = index
        this.name = name
        this.parameters = parameters
    }

    getIndex() {
        return this.index
    }

    getName() {
        return this.name
    }

    onValueChanged(callback) {
        for (i in this.parameters) {
            if (this.parameters[i]) {
                this.parameters[i].onValueChanged(this.handleParameterChange.bind(this, parseInt(i), callback))
            }
        }
    }

    getParameters() {
        return this.parameters
    }

    getParameter(parameterIndex) {
        return this.parameters[parameterIndex]
    }

    default() {
        for (i in this.parameters) {
            this.parameters[i].default()
        }
    }

    random() {
        for (i in this.parameters) {
            this.parameters[i].random()
        }
    }

    handleParameterChange(i, callback) {
        callback()
    }
}

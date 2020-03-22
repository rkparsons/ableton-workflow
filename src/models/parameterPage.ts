import { Parameter } from '~/models/parameter'

export class ParameterPage {
    index: number
    name: string
    parameters: Parameter[]

    constructor(index: number, name: string, parameters: Parameter[]) {
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

    onValueChanged(callback: () => void) {
        this.parameters.forEach((parameter, index) => {
            parameter.onValueChanged(this.handleParameterChange.bind(this, index, callback))
        })
    }

    getParameters() {
        return this.parameters
    }

    getParameter(parameterIndex: number) {
        return this.parameters[parameterIndex]
    }

    default() {
        this.parameters.forEach(parameter => parameter.default())
    }

    random() {
        this.parameters.forEach(parameter => parameter.random())
    }

    handleParameterChange(index: number, callback: () => void) {
        callback()
    }
}

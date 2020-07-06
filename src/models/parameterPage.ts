import { Parameter } from '~/models/parameter'
import { chunk } from '~/util/array'

export class ParameterPage {
    index: number
    subPageIndex: number
    name: string
    parameters: Parameter[]
    subPages: Parameter[][]

    constructor(index: number, name: string, parameters: Parameter[]) {
        this.index = index
        this.subPageIndex = 0
        this.name = name
        this.parameters = parameters
        this.subPages = chunk(parameters, 8)
    }

    getIndex() {
        return this.index
    }

    getSubPageIndex() {
        return this.subPageIndex
    }

    incrementSubPage() {
        if (this.subPageIndex < this.subPages.length - 1) {
            this.subPageIndex++
        }
    }

    decrementSubPage() {
        if (this.subPageIndex > 0) {
            this.subPageIndex--
        }
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
        return this.subPages[this.subPageIndex]
    }

    getSubPages() {
        return this.subPages
    }

    getParameter(parameterIndex: number) {
        return this.getParameters()[parameterIndex]
    }

    default() {
        this.getParameters().forEach((parameter) => parameter.default())
    }

    random() {
        this.getParameters().forEach((parameter) => parameter.random())
    }

    handleParameterChange(index: number, callback: () => void) {
        callback()
    }
}

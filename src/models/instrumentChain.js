/* eslint-disable */

import { Mutable } from './mutable'

export class InstrumentChain extends Mutable {
    constructor(index, name, parameterPages, muteParameter) {
        super(muteParameter)
        this.index = index
        this.name = name
        this.parameterPages = parameterPages
        this.activeParameterPageIndex = 0
    }

    getIndex() {
        return this.index
    }

    getName() {
        return this.name
    }

    onValueChanged(callback) {
        super.onValueChanged(callback)

        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }
    }

    getParameterPages() {
        return this.parameterPages
    }

    getActiveParameterPage() {
        return this.parameterPages[this.activeParameterPageIndex]
    }

    setActiveParameterPage(index) {
        this.activeParameterPageIndex = index
    }
}

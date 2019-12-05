export class InstrumentChain {
    constructor(index, name, parameterPages, muteParameter) {
        this.index = index
        this.name = name
        this.parameterPages = parameterPages
        this.muteParameter = muteParameter
        this.activeParameterPageIndex = 0
    }

    getIndex() {
        return this.index
    }

    getName() {
        return this.name
    }

    onValueChanged(callback) {
        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }

        this.muteParameter.onValueChanged(callback)
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

    getMuteParameter() {
        return this.muteParameter
    }

    isMuted() {
        return Boolean(this.getMuteParameter().getValue())
    }
}

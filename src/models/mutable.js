export class Mutable {
    constructor(muteParameter) {
        this.muteParameter = muteParameter
    }

    onValueChanged(callback) {
        this.muteParameter.onValueChanged(callback)
    }

    getMuteParameter() {
        return this.muteParameter
    }

    isMuted() {
        return Boolean(this.muteParameter.getValue())
    }
}

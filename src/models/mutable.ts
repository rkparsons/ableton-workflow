import { ChainMute } from '~/parameters/chain/mute'

export class Mutable {
    muteParameter: ChainMute

    constructor(muteParameter: ChainMute) {
        this.muteParameter = muteParameter
    }

    onValueChanged(callback: () => void) {
        this.muteParameter.onValueChanged(callback)
    }

    getMuteParameter() {
        return this.muteParameter
    }

    isMuted() {
        return Boolean(this.muteParameter.getValue())
    }
}

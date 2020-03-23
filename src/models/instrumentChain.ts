import { ChainMute } from '~/parameters/chain/mute'
import { Mutable } from '~/models/mutable'
import { ParameterPage } from '~/models/parameterPage'
import log from '~/util/log'

export class InstrumentChain extends Mutable {
    index: number
    name: string
    parameterPages: ParameterPage[]
    activeParameterPageIndex: number

    constructor(index: number, name: string, parameterPages: ParameterPage[] = [], muteParameter: ChainMute) {
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

    onValueChanged(callback: () => void) {
        super.onValueChanged(callback)

        this.parameterPages.forEach(parameterPage => {
            parameterPage.onValueChanged(callback)
        })
    }

    getParameterPages() {
        return this.parameterPages
    }

    getActiveParameterPage() {
        return this.parameterPages[this.activeParameterPageIndex]
    }

    setActiveParameterPage(index: number) {
        this.activeParameterPageIndex = index
    }
}

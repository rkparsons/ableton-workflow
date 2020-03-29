import AmpLoop from '~/constants/ampLoop'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerAmpAttack } from '~/parameters/sampler/ampAttack'
import { SamplerAmpDecay } from '~/parameters/sampler/ampDecay'
import { SamplerAmpLoop } from '~/parameters/sampler/ampLoop'
import { SamplerAmpLoopTime } from '~/parameters/sampler/ampLoopTime'
import { SamplerAmpRelease } from '~/parameters/sampler/ampRelease'
import { SamplerAmpSustain } from '~/parameters/sampler/ampSustain'
import { SamplerAmpSync } from '~/parameters/sampler/ampSync'

export class AmplifierPage extends ParameterPage {
    ampAttack: SamplerAmpAttack
    ampDecay: SamplerAmpDecay
    ampSustain: SamplerAmpSustain
    ampRelease: SamplerAmpRelease
    ampLoop: SamplerAmpLoop
    ampSync: SamplerAmpSync
    ampLoopTime: SamplerAmpLoopTime

    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const ampAttack = new SamplerAmpAttack({ pathToChain, deviceIndex })
        const ampDecay = new SamplerAmpDecay({ pathToChain, deviceIndex })
        const ampSustain = new SamplerAmpSustain({ pathToChain, deviceIndex })
        const ampRelease = new SamplerAmpRelease({ pathToChain, deviceIndex })
        const ampLoop = new SamplerAmpLoop({ pathToChain, deviceIndex })
        const ampSync = new SamplerAmpSync({ pathToChain, deviceIndex })
        const ampLoopTime = new SamplerAmpLoopTime({ pathToChain, deviceIndex })

        const parameters = [ampAttack, ampDecay, ampSustain, ampRelease, ampLoop, ampSync, ampLoopTime]

        super(pageIndex, 'Amp', parameters)

        this.ampAttack = ampAttack
        this.ampDecay = ampDecay
        this.ampSustain = ampSustain
        this.ampRelease = ampRelease
        this.ampLoop = ampLoop
        this.ampSync = ampSync
        this.ampLoopTime = ampLoopTime
    }

    // todo: rename sync
    handleParameterChange(index: number, callback: () => void) {
        const parameter = this.getParameter(index)

        if (parameter instanceof SamplerAmpLoop) {
            this.handleAmpLoop()
        }

        super.handleParameterChange(index, callback)
    }

    handleAmpLoop() {
        if (this.ampLoop.getDisplayValue() === AmpLoop.LOOP) {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop, this.ampLoopTime]
        } else if (this.ampLoop.getDisplayValue() === AmpLoop.BEAT || this.ampLoop.getDisplayValue() === AmpLoop.SYNC) {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop, this.ampSync]
        } else {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop]
        }
    }
}

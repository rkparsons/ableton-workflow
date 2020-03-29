import AmpLoop from '~/constants/ampLoop'
import { Blank } from '~/parameters/blank'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerAmpAttack } from '~/parameters/sampler/ampAttack'
import { SamplerAmpDecay } from '~/parameters/sampler/ampDecay'
import { SamplerAmpLoop } from '~/parameters/sampler/ampLoop'
import { SamplerAmpLoopRepeat } from '~/parameters/sampler/ampLoopRepeat'
import { SamplerAmpLoopTime } from '~/parameters/sampler/ampLoopTime'
import { SamplerAmpRelease } from '~/parameters/sampler/ampRelease'
import { SamplerAmpSustain } from '~/parameters/sampler/ampSustain'

export class AmplifierPage extends ParameterPage {
    ampAttack: SamplerAmpAttack
    ampDecay: SamplerAmpDecay
    ampSustain: SamplerAmpSustain
    ampRelease: SamplerAmpRelease
    ampLoop: SamplerAmpLoop
    ampLoopRepeat: SamplerAmpLoopRepeat
    ampLoopTime: SamplerAmpLoopTime
    blankParam: Blank

    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const ampAttack = new SamplerAmpAttack({ pathToChain, deviceIndex })
        const ampDecay = new SamplerAmpDecay({ pathToChain, deviceIndex })
        const ampSustain = new SamplerAmpSustain({ pathToChain, deviceIndex })
        const ampRelease = new SamplerAmpRelease({ pathToChain, deviceIndex })
        const ampLoop = new SamplerAmpLoop({ pathToChain, deviceIndex })
        const ampLoopRepeat = new SamplerAmpLoopRepeat({ pathToChain, deviceIndex })
        const ampLoopTime = new SamplerAmpLoopTime({ pathToChain, deviceIndex })
        const blankParam = new Blank()

        const parameters = [ampAttack, ampDecay, ampSustain, ampRelease, ampLoop, ampLoopRepeat, ampLoopTime]

        super(pageIndex, 'Amp', parameters)

        this.ampAttack = ampAttack
        this.ampDecay = ampDecay
        this.ampSustain = ampSustain
        this.ampRelease = ampRelease
        this.ampLoop = ampLoop
        this.ampLoopRepeat = ampLoopRepeat
        this.ampLoopTime = ampLoopTime
        this.blankParam = blankParam
    }

    handleParameterChange(index: number, callback: () => void) {
        const parameter = this.getParameter(index)

        if (parameter instanceof SamplerAmpLoop) {
            this.handleAmpLoop()
        }

        super.handleParameterChange(index, callback)
    }

    handleAmpLoop() {
        if (this.ampLoop.getDisplayValue() === AmpLoop.LOOP) {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop, this.ampLoopTime, this.blankParam, this.blankParam]
        } else if (this.ampLoop.getDisplayValue() === AmpLoop.BEAT || this.ampLoop.getDisplayValue() === AmpLoop.SYNC) {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop, this.ampLoopRepeat, this.blankParam, this.blankParam]
        } else {
            this.parameters = [this.ampAttack, this.ampDecay, this.ampSustain, this.ampRelease, this.ampLoop, this.blankParam, this.blankParam, this.blankParam]
        }
    }
}

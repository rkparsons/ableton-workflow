import { Blank } from '~/parameters/blank'
import { OmnisphereAmpAttack } from '~/parameters/omnisphere/ampAttack'
import { OmnisphereAmpDecay } from '~/parameters/omnisphere/ampDecay'
import { OmnisphereAmpRelease } from '~/parameters/omnisphere/ampRelease'
import { OmnisphereAmpSustain } from '~/parameters/omnisphere/ampSustain'
import { OmnisphereDrift } from '~/parameters/omnisphere/drift'
import { OmnisphereOctave } from '~/parameters/omnisphere/octave'
import { OmnisphereOscLFOAmount } from '~/parameters/omnisphere/oscLFOAmount'
import { OmnisphereOscLFORate } from '~/parameters/omnisphere/oscLFORate'
import { OmnisphereReverse } from '~/parameters/omnisphere/reverse'
import { OmnisphereSampleSelect } from '~/parameters/omnisphere/sampleSelect'
import { OmnisphereStart } from '~/parameters/omnisphere/start'
import { OmnisphereTimbre } from '~/parameters/omnisphere/timbre'
import { OmnisphereTimbreMode } from '~/parameters/omnisphere/timbreMode'
import { ParameterPage } from '~/models/parameterPage'

export class SamplePage extends ParameterPage {
    constructor(pageIndex: number, chainName: string, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereSampleSelect({ chainName, pathToChain, deviceIndex, displayIndex: 0 }),
            new OmnisphereSampleSelect({ chainName, pathToChain, deviceIndex, displayIndex: 1 }),
            new OmnisphereOctave({ pathToChain, deviceIndex }),
            new OmnisphereTimbreMode({ pathToChain, deviceIndex }),
            new OmnisphereTimbre({ pathToChain, deviceIndex }),
            new OmnisphereDrift({ pathToChain, deviceIndex }),
            new OmnisphereOscLFOAmount({ pathToChain, deviceIndex }),
            new OmnisphereOscLFORate({ pathToChain, deviceIndex }),

            new OmnisphereStart({ pathToChain, deviceIndex }),
            new OmnisphereReverse({ pathToChain, deviceIndex }),
            new Blank(),
            new Blank(),
            new OmnisphereAmpAttack({ pathToChain, deviceIndex }),
            new OmnisphereAmpDecay({ pathToChain, deviceIndex }),
            new OmnisphereAmpSustain({ pathToChain, deviceIndex }),
            new OmnisphereAmpRelease({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Sample', parameters)
        this.isFirstParameterDoubleLength = true
    }
}

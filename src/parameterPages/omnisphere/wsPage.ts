import { Blank } from '~/parameters/blank'
import { OmnisphereWSAnimation } from '~/parameters/omnisphere/wsAnimation'
import { OmnisphereWSBitCrush } from '~/parameters/omnisphere/wsBitCrush'
import { OmnisphereWSCrushForce } from '~/parameters/omnisphere/wsCrushForce'
import { OmnisphereWSFreq } from '~/parameters/omnisphere/wsFreq'
import { OmnisphereWSGain } from '~/parameters/omnisphere/wsGain'
import { OmnisphereWSMix } from '~/parameters/omnisphere/wsMix'
import { OmnisphereWSSampleRate } from '~/parameters/omnisphere/wsSampleRate'
import { OmnisphereWSSampleRateLFOAmount } from '~/parameters/omnisphere/wsSampleRateLFOAmount'
import { OmnisphereWSSampleRateLFOFreq } from '~/parameters/omnisphere/wsSampleRateLFOFreq'
import { OmnisphereWSSampleRateLFOType } from '~/parameters/omnisphere/wsSampleRateLFOType'
import { OmnisphereWSType } from '~/parameters/omnisphere/wsType'
import { ParameterPage } from '~/models/parameterPage'

export class WSPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereWSMix({ pathToChain, deviceIndex }),
            new OmnisphereWSGain({ pathToChain, deviceIndex }),
            new OmnisphereWSType({ pathToChain, deviceIndex }),
            new OmnisphereWSFreq({ pathToChain, deviceIndex }),
            new OmnisphereWSBitCrush({ pathToChain, deviceIndex }),
            new OmnisphereWSCrushForce({ pathToChain, deviceIndex }),
            new OmnisphereWSSampleRate({ pathToChain, deviceIndex }),
            new OmnisphereWSAnimation({ pathToChain, deviceIndex }),

            new OmnisphereWSSampleRateLFOType({ pathToChain, deviceIndex }),
            new OmnisphereWSSampleRateLFOAmount({ pathToChain, deviceIndex }),
            new OmnisphereWSSampleRateLFOFreq({ pathToChain, deviceIndex }),
            new Blank(),
            new Blank(),
            new Blank(),
            new Blank(),
            new Blank(),
        ]

        super(pageIndex, 'Shaper', parameters)
    }
}

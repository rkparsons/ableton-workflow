import { Blank } from '~/parameters/blank'
import { CollisionNoiseFilterFreq } from '~/parameters/collision/noiseFilterFreq'
import { CollisionNoiseFilterFreqVelocity } from '~/parameters/collision/noiseFilterFreqVelocity'
import { CollisionNoiseFilterRes } from '~/parameters/collision/noiseFilterRes'
import { CollisionNoiseFilterType } from '~/parameters/collision/noiseFilterType'
import { CollisionNoiseOn } from '~/parameters/collision/noiseOn'
import { CollisionNoiseVelocity } from '~/parameters/collision/noiseVelocity'
import { CollisionNoiseVolume } from '~/parameters/collision/noiseVolume'
import { ParameterPage } from '~/models/parameterPage'

export class NoisePage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new CollisionNoiseOn({ pathToChain, deviceIndex }),
            new CollisionNoiseVolume({ pathToChain, deviceIndex }),
            new CollisionNoiseVelocity({ pathToChain, deviceIndex }),
            new Blank(),
            new CollisionNoiseFilterType({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterFreq({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterFreqVelocity({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterRes({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Noise', parameters)
    }
}

import { Blank } from '../../parameters/blank'
import { CollisionNoiseFilterFreq } from '../../parameters/collision/noiseFilterFreq'
import { CollisionNoiseFilterFreqVelocity } from '../../parameters/collision/noiseFilterFreqVelocity'
import { CollisionNoiseFilterRes } from '../../parameters/collision/noiseFilterRes'
import { CollisionNoiseFilterType } from '../../parameters/collision/noiseFilterType'
import { CollisionNoiseVelocity } from '../../parameters/collision/noiseVelocity'
import { CollisionNoiseVolume } from '../../parameters/collision/noiseVolume'
import { ParameterPage } from '../../models/parameterPage'

export class NoiseEnvPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new Blank(),
            new CollisionNoiseVolume({ pathToChain, deviceIndex }),
            new CollisionNoiseVelocity({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterType({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterFreq({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterFreqVelocity({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterRes({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Env', parameters)
    }
}

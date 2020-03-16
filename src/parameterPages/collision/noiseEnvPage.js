import { CollisionNoiseFilterEnv } from '../../parameters/collision/noiseFilterEnv'
import { CollisionNoiseFilterEnvAttack } from '../../parameters/collision/noiseFilterEnvAttack'
import { CollisionNoiseFilterEnvDecay } from '../../parameters/collision/noiseFilterEnvDecay'
import { CollisionNoiseFilterEnvRelease } from '../../parameters/collision/noiseFilterEnvRelease'
import { CollisionNoiseFilterEnvSustain } from '../../parameters/collision/noiseFilterEnvSustain'
import { CollisionNoiseFilterFreq } from '../../parameters/collision/noiseFilterFreq'
import { CollisionNoiseFilterRes } from '../../parameters/collision/noiseFilterRes'
import { CollisionNoiseFilterType } from '../../parameters/collision/noiseFilterType'
import { ParameterPage } from '../../models/parameterPage'

export class NoiseEnvPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionNoiseFilterType({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterFreq({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterEnv({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterRes({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterEnvAttack({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterEnvDecay({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterEnvSustain({ pathToChain, deviceIndex }),
            new CollisionNoiseFilterEnvRelease({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Env', parameters)
    }
}

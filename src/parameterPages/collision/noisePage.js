import { CollisionNoiseFilterType } from '../../parameters/collision/noiseFilterType'
import { CollisionNoiseOn } from '../../parameters/collision/noiseOn'
import { CollisionNoiseVolume } from '../../parameters/collision/noiseVolume'
import { ParameterPage } from '../../models/parameterPage'

export class NoisePage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [new CollisionNoiseOn({ pathToChain, deviceIndex }), new CollisionNoiseVolume({ pathToChain, deviceIndex }), new CollisionNoiseFilterType({ pathToChain, deviceIndex })]

        super(pageIndex, 'Noise', parameters)
    }
}

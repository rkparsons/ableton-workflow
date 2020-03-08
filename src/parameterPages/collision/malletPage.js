import { CollisionMalletNoise } from '../../parameters/collision/malletNoise'
import { CollisionMalletNoiseVelocity } from '../../parameters/collision/malletNoiseVelocity'
import { CollisionMalletStiffness } from '../../parameters/collision/malletStiffness'
import { CollisionMalletStiffnessVelocity } from '../../parameters/collision/malletStiffnessVelocity'
import { CollisionMalletVolume } from '../../parameters/collision/malletVolume'
import { CollisionMalletVolumeVelocity } from '../../parameters/collision/malletVolumeVelocity'
import { ParameterPage } from '../../models/parameterPage'

export class MalletPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionMalletVolume({ pathToChain, deviceIndex }),
            new CollisionMalletVolumeVelocity({ pathToChain, deviceIndex }),
            new CollisionMalletStiffness({ pathToChain, deviceIndex }),
            new CollisionMalletStiffnessVelocity({ pathToChain, deviceIndex }),
            new CollisionMalletNoise({ pathToChain, deviceIndex }),
            new CollisionMalletNoiseVelocity({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Mallet', parameters)
    }
}

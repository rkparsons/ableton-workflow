import { CollisionMalletVolume } from '../../parameters/collision/malletVolume'
import { CollisionMalletVolumeVelocity } from '../../parameters/collision/malletVolumeVelocity'
import { ParameterPage } from '../../models/parameterPage'

export class MalletPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [new CollisionMalletVolume({ pathToChain, deviceIndex }), new CollisionMalletVolumeVelocity({ pathToChain, deviceIndex })]

        super(pageIndex, 'Mallet', parameters)
    }
}

import { Blank } from '../../parameters/blank'
import { CollisionReso1On } from '../../parameters/collision/reso1On'
import { CollisionReso1Quality } from '../../parameters/collision/reso1Quality'
import { CollisionReso1Volume } from '../../parameters/collision/reso1Volume'
import { CollisionReso2On } from '../../parameters/collision/reso2On'
import { CollisionReso2Quality } from '../../parameters/collision/reso2Quality'
import { CollisionReso2Volume } from '../../parameters/collision/reso2Volume'
import { CollisionRouting } from '../../parameters/collision/routing'
import { ParameterPage } from '../../models/parameterPage'

export class MixerPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionRouting({ pathToChain, deviceIndex }),
            new CollisionReso1On({ pathToChain, deviceIndex }),
            new CollisionReso1Volume({ pathToChain, deviceIndex }),
            new CollisionReso1Quality({ pathToChain, deviceIndex }),
            new Blank(),
            new CollisionReso2On({ pathToChain, deviceIndex }),
            new CollisionReso2Volume({ pathToChain, deviceIndex }),
            new CollisionReso2Quality({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Mixer', parameters)
    }
}

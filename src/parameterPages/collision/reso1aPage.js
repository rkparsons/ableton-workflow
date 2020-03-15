import { Blank } from '../../parameters/blank'
import { CollisionReso1Brightness } from '../../parameters/collision/reso1Brightness'
import { CollisionReso1Decay } from '../../parameters/collision/reso1Decay'
import { CollisionReso1Inharmonics } from '../../parameters/collision/reso1Inharmonics'
import { CollisionReso1Material } from '../../parameters/collision/reso1Material'
import { CollisionReso1Position } from '../../parameters/collision/reso1Position'
import { CollisionReso1Ratio } from '../../parameters/collision/reso1Ratio'
import { CollisionReso1Type } from '../../parameters/collision/reso1Type'
import { ParameterPage } from '../../models/parameterPage'

export class Reso1aPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionReso1Type({ pathToChain, deviceIndex }),
            new CollisionReso1Decay({ pathToChain, deviceIndex }),
            new CollisionReso1Material({ pathToChain, deviceIndex }),
            new CollisionReso1Ratio({ pathToChain, deviceIndex }),
            new CollisionReso1Brightness({ pathToChain, deviceIndex }),
            new CollisionReso1Inharmonics({ pathToChain, deviceIndex }),
            new CollisionReso1Position({ pathToChain, deviceIndex }),
            new Blank(),
        ]

        super(pageIndex, 'Reso1', parameters)
    }
}

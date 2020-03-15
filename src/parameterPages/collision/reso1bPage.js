import { Blank } from '../../parameters/blank'
import { CollisionReso1Opening } from '../../parameters/collision/reso1Opening'
import { CollisionReso1Radius } from '../../parameters/collision/reso1Radius'
import { ParameterPage } from '../../models/parameterPage'

export class Reso1bPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionReso1Radius({ pathToChain, deviceIndex }),
            new CollisionReso1Opening({ pathToChain, deviceIndex }),
            new Blank(),
            new Blank(),
            new Blank(),
            new Blank(),
            new Blank(),
            new Blank(),
        ]

        super(pageIndex, 'Reso1.', parameters)
    }
}

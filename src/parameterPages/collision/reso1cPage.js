import { Blank } from '~/parameters/blank'
import { CollisionReso1Env } from '~/parameters/collision/reso1Env'
import { CollisionReso1EnvVelocity } from '~/parameters/collision/reso1EnvVelocity'
import { CollisionReso1Fine } from '~/parameters/collision/reso1Fine'
import { CollisionReso1Time } from '~/parameters/collision/reso1Time'
import { CollisionReso1Tune } from '~/parameters/collision/reso1Tune'
import { ParameterPage } from '~/models/parameterPage'

export class Reso1cPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new CollisionReso1Tune({ pathToChain, deviceIndex }),
            new CollisionReso1Fine({ pathToChain, deviceIndex }),
            new CollisionReso1Env({ pathToChain, deviceIndex }),
            new CollisionReso1EnvVelocity({ pathToChain, deviceIndex }),
            new CollisionReso1Time({ pathToChain, deviceIndex }),
            new Blank(),
            new Blank(),
            new Blank(),
        ]

        super(pageIndex, 'Reso1..', parameters)
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Decay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Decay',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 40',
        })
    }
}

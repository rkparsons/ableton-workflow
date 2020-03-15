import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Radius extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Radius',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 47',
        })
    }
}

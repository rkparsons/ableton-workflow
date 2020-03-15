import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Opening extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Opening',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 55',
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Env extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '< Env',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 37',
            inputRange: [-1, 1],
        })
    }
}

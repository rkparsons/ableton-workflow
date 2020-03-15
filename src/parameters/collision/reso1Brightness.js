import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Brightness extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Bright',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 51',
            inputRange: [-1, 1],
        })
    }
}

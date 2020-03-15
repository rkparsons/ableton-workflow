import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Material extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Material',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 44',
            inputRange: [-1, 1],
        })
    }
}

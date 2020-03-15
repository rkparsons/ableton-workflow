import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Tune extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Tune',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 34',
            inputRange: [-48, 48],
        })
    }
}

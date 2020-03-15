import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '< vel',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 19',
            inputRange: [-5, 5],
        })
    }
}

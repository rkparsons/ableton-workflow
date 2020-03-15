import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletNoiseVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '< vel',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 14',
            inputRange: [-5, 5],
        })
    }
}
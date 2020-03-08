import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletStiffnessVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '< vel',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 11',
            inputRange: [-5, 5],
        })
    }
}

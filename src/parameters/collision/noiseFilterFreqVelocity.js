import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterFreqVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '< vel',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 23',
            inputRange: [-10, 10],
        })
    }
}

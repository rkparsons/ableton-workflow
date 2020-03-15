import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterEnvDecay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 28',
            defaultValue: 1,
        })
    }
}

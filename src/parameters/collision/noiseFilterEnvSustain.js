import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterEnvSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 29',
            defaultValue: 1,
        })
    }
}

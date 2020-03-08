import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletNoise extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Volume',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 13',
        })
    }
}

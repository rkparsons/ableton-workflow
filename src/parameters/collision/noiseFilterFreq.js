import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 22',
        })
    }
}

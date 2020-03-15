import { EnumParameter } from '../../models/enumParameter'

export class CollisionNoiseOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 17',
            options: ['off', 'on'],
        })
    }
}

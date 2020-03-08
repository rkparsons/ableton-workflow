import { EnumParameter } from '../../models/enumParameter'

export class CollisionMalletOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 6',
            options: ['off', 'on'],
        })
    }
}

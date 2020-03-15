import { EnumParameter } from '../../models/enumParameter'

export class CollisionReso2On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Reso2',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 64',
            options: ['off', 'on'],
        })
    }
}

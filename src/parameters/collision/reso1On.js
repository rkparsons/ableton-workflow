import { EnumParameter } from '../../models/enumParameter'

export class CollisionReso1On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Reso1',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 31',
            options: ['off', 'on'],
        })
    }
}

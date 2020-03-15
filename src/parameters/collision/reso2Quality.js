import { EnumParameter } from '../../models/enumParameter'

export class CollisionReso2Quality extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Quality',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 66',
            options: ['basic', 'few', 'medium', 'full'],
        })
    }
}

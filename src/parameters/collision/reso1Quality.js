import { EnumParameter } from '../../models/enumParameter'

export class CollisionReso1Quality extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Quality',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 33',
            options: ['basic', 'few', 'medium', 'full'],
        })
    }
}

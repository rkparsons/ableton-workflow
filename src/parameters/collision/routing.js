import { EnumParameter } from '../../models/enumParameter'

export class CollisionRouting extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Routing',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 1',
            options: ['1 > 2', '1 + 2'],
        })
    }
}

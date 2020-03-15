import { EnumParameter } from '../../models/enumParameter'

export class CollisionNoiseFilterType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 21',
            options: ['low -\\', 'high /-', 'band /\\', 'lhp /-\\'],
        })
    }
}

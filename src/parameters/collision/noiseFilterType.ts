import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionNoiseFilterType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 21',
            options: ['low -\\', 'high /-', 'band /\\', 'lhp /-\\'],
        })
    }
}

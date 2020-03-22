import { EnumParameter } from '../../models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionNoiseOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 17',
            options: ['off', 'on'],
        })
    }
}

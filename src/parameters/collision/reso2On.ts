import { EnumParameter } from '../../models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionReso2On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Reso2',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 64',
            options: ['off', 'on'],
        })
    }
}

import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionReso1On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Reso1',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 31',
            options: ['off', 'on'],
        })
    }
}

import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionRouting extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Routing',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 1',
            options: ['1 > 2', '1 + 2'],
        })
    }
}

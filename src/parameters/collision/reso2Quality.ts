import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionReso2Quality extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Quality',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 66',
            options: ['basic', 'few', 'medium', 'full'],
        })
    }
}

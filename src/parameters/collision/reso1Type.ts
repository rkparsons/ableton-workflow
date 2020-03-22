import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class CollisionReso1Type extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Type',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 32',
            options: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
        })
    }
}

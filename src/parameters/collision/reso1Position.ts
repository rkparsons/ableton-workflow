import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Position extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Position',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 57',
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Opening extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Opening',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 55',
        })
    }
}

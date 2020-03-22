import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletNoiseColor extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Color',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 16',
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletNoise extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Impact',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 13',
        })
    }
}

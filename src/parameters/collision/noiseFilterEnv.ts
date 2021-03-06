import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class CollisionNoiseFilterEnv extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '< env',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 25',
            inputRange: [-5, 5],
        })
    }
}

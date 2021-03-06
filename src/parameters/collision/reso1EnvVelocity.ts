import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class CollisionReso1EnvVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '< vel',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 38',
            inputRange: [-5, 5],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterEnvSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 29',
            defaultValue: 1,
        })
    }
}

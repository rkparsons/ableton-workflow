import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterEnvSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 71',
            inputRange: [0, 127],
        })
    }
}

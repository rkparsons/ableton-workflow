import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterEnvDecay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 62',
            inputRange: [0, 127],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterEnv extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Env',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 68',
            inputRange: [0, 127],
            defaultValue: 63,
        })
    }
}

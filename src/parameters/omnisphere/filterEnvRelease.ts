import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterEnvRelease extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'R \\',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 72',
            inputRange: [0, 127],
            defaultValue: 45,
        })
    }
}

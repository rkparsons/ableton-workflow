import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonDetuneLFOFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Hz',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 79',
            inputRange: [0, 127],
        })
    }
}

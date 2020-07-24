import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonDetuneLFOAmount extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'LFO>Tune',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 78',
            inputRange: [0, 127],
        })
    }
}

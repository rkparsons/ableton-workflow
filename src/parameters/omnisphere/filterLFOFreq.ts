import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterLFOFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'LFO Hz',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 67',
            inputRange: [0, 127],
        })
    }
}

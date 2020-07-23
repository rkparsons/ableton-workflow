import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSSampleRateLFOType extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'LFO',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 73',
            inputRange: [0, 127],
        })
    }
}

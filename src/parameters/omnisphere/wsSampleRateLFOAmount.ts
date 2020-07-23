import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSSampleRateLFOAmount extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Lvl',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 74',
            inputRange: [0, 127],
        })
    }
}

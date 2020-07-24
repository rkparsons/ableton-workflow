import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereDrift extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Drift',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 8',
            inputRange: [0, 127],
        })
    }
}

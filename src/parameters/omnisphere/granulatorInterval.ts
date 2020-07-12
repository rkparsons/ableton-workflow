import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorInterval extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Interval',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 55',
            inputRange: [0, 127],
        })
    }
}

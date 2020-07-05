import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSGain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Gain',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 26',
            inputRange: [-1, 1],
        })
    }
}

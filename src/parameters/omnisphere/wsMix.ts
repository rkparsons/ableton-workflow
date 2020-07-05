import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSMix extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Mix',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 25',
            inputRange: [0, 127],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter2Freq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Hz',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 62',
            inputRange: [-1, 1],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterMix extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: ' <->',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 69',
            inputRange: [-1, 1],
        })
    }
}

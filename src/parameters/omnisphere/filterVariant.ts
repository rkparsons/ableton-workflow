import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterVariant extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Variant',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 59',
            inputRange: [-1, 1],
        })
    }
}

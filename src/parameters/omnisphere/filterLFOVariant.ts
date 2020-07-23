import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterLFOVariant extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '> Var',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 65',
            inputRange: [0, 127],
        })
    }
}

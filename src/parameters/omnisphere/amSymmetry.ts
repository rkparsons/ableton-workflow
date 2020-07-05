import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMSymmetry extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Symmetry',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 23',
            inputRange: [0, 127],
        })
    }
}

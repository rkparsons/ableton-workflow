import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter2Variant extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Var 2',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 72',
            inputRange: [-1, 1],
        })
    }
}

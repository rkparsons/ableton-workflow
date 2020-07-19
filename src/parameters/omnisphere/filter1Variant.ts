import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter1Variant extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Var 1',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 60',
            inputRange: [-1, 1],
        })
    }
}

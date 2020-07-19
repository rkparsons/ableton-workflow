import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterRes extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Res',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 58',
            inputRange: [-1, 1],
        })
    }
}

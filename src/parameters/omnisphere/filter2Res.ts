import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter2Res extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Res 2',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 71',
            inputRange: [-1, 1],
        })
    }
}

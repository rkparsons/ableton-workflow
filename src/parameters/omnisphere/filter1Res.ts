import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter1Res extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Q',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 59',
            inputRange: [-1, 1],
        })
    }
}

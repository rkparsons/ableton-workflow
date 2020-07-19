import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilter1Res extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Res 1',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 67',
            inputRange: [-1, 1],
        })
    }
}

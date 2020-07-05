import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMAmount extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Amount',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 20',
            inputRange: [0, 127],
        })
    }
}

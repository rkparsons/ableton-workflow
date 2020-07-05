import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonSpread extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Spread',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 35',
            inputRange: [0, 127],
        })
    }
}

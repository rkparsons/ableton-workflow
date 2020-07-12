import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorSpread extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Spread',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 52',
            inputRange: [0, 127],
        })
    }
}

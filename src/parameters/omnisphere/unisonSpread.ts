import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonSpread extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Spread',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 31',
        })
    }
}

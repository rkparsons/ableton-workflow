import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFilterFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 65',
            inputRange: [-1, 1],
        })
    }
}

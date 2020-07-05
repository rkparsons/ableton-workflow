import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 19',
            inputRange: [0, 127],
        })
    }
}

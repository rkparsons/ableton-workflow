import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSSampleRate extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Downsamp',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 31',
            inputRange: [0, 127],
        })
    }
}

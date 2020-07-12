import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorSmoothing extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Smooth',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 51',
            inputRange: [0, 127],
        })
    }
}

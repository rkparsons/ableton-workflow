import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorDetune extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Detune',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 53',
            inputRange: [0, 127],
        })
    }
}

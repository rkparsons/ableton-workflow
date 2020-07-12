import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorPitch extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Pitch',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 54',
            inputRange: [0, 127],
        })
    }
}

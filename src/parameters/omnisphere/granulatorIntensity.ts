import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorIntensity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Intense',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 50',
            inputRange: [0, 127],
        })
    }
}

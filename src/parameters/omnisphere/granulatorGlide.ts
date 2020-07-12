import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorGlide extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Glide',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 56',
            inputRange: [0, 127],
        })
    }
}

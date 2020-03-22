import { ParameterProps } from '~/types/parameterProps'
import { RepitchParameter } from '~/models/repitchParameter'

export class SamplerRepitch extends RepitchParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Repitch',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 34',
            pathDecimal: 'parameters 35',
            inputRange: [-7.5, 7.5],
        })
    }
}

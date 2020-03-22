import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerFilterDrive extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 83',
            inputRange: [0, 24],
        })
    }
}

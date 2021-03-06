import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerFilterLfo extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 102',
            inputRange: [0, 24],
        })
    }
}

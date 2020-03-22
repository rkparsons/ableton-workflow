import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerPanLfo extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Pan',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 57',
        })
    }
}

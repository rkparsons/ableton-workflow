import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerPitchLfo extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Pitch',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 36',
        })
    }
}

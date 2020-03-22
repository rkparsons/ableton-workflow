import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerVolumeVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Vol',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 54',
        })
    }
}

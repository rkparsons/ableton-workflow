import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerReverse extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Playback', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 1', options: ['>>>', '<<<'], randomRange: [0, 0] })
    }
}

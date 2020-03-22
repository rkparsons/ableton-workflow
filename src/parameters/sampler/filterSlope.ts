import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerFilterSlope extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Slope', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 79', options: ['12 dB', '24 dB'] })
    }
}

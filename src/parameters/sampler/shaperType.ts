import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerShaperType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Shaper', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 104', options: ['soft', 'hard', 'sine', '4bit'] })
    }
}

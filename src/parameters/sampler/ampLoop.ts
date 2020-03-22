import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerAmpLoop extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Loop', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 68', options: ['none', 'loop', 'beat', 'sync', 'trig'] })
    }
}

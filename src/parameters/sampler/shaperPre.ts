import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerShaperPre extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Route', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 106', options: ['<<<', '>>>'] })
    }
}

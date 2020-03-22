import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerFilterCircuit extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Circuit', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 77', options: ['clean', 'osr', 'ms2', 'smp', 'prd'] })
    }
}

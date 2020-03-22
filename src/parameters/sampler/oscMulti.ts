import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerOscMulti extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Multi', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 13', options: ['x  0.001', 'x  0.01', 'x  0.1', 'x  1', 'x 10'] })
    }
}

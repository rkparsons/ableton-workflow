import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class SamplerFilterType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({ name: 'Type', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 76', options: ['low -\\', 'high /-', 'band /\\', 'notch \\/'] })
    }
}

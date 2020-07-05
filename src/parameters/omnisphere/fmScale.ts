import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereFMScale extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Scale',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 13',
            options: ['normal', 'boost'],
        })
    }
}

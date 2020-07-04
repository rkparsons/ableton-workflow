import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereAMScale extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Scale',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 17',
            options: ['normal', 'boost'],
        })
    }
}

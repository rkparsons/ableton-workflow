import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereAMOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 13',
            options: ['off', 'on'],
        })
    }
}

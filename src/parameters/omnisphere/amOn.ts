import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereAMOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 17',
            options: ['off', 'on'],
        })
    }
}

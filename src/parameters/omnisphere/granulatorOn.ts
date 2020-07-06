import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereGranulatorOn extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'I/O',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 41',
            options: ['off', 'on'],
        })
    }
}

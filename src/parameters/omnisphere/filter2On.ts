import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereFilter2On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'High Cut',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 61',
            options: ['off', 'on'],
        })
    }
}

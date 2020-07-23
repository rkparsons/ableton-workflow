import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereFilter1On extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Low Cut',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 57',
            options: ['off', 'on'],
        })
    }
}

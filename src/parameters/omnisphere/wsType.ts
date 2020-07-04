import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereWSType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Shape',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 25',
            options: ['off', '1', '2', '3', '4'],
        })
    }
}

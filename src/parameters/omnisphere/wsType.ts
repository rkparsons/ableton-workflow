import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereWSType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Type',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 25',
            options: ['1', '4'],
        })
    }
}

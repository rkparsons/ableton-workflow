import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereWSType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Type',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 27',
            options: ['1', '4'],
        })
    }
}

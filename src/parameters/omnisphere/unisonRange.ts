import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereUnisonRange extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Range',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 34',
            options: ['fine', 'coarse'],
        })
    }
}

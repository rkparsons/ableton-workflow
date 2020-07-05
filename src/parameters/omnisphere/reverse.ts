import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereReverse extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Playback',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 5',
            options: ['>>>', '<<<'],
        })
    }
}

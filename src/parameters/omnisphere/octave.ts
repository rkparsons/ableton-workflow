import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereOctave extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Octave',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 80',
            options: ['-2', '-1', '0', '+1', '+2'],
        })
    }
}

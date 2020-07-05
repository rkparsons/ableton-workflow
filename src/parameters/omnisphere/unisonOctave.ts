import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereUnisonOctave extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Octave',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 36',
            options: [' -2', ' -1', '  0', ' +1', ' +2'],
        })
    }
}

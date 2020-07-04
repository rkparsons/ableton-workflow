import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonOctave extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Octave',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 32',
            defaultValue: 0.5,
        })
    }
}

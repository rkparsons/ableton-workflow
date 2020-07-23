import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereWSSampleRateLFOType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'LFO>SR',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 73',
            options: ['sine', 'triangle', 'square', 'rnd squ', 'saw', 'rev saw', 's&h', 'heart', 'rand'],
        })
    }
}

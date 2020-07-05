import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonDetune extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Detune',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 33',
            defaultValue: 0.5,
        })
    }
}

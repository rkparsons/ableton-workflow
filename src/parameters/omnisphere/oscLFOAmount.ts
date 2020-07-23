import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereOscLFOAmount extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Vib Lvl',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 6',
            inputRange: [0, 127],
        })
    }
}

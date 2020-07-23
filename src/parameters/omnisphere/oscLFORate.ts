import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereOscLFORate extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Vib Rate',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 7',
            inputRange: [0, 127],
        })
    }
}

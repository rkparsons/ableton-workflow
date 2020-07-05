import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonDepth extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Depth',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 34',
            inputRange: [0, 127],
        })
    }
}

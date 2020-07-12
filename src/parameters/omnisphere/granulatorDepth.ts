import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorDepth extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Depth',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 49',
            inputRange: [0, 127],
        })
    }
}

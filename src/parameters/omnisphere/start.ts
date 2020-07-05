import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereStart extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 4',
            inputRange: [0, 127],
        })
    }
}

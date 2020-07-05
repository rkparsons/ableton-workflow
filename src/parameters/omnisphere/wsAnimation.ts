import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSAnimation extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Animate',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 32',
            inputRange: [0, 127],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMShape extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Shape',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 22',
            inputRange: [0, 127],
        })
    }
}

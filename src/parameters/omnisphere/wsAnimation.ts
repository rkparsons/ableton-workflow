import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSAnimation extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Animation',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 27',
        })
    }
}

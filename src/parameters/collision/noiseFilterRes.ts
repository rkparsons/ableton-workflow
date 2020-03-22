import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterRes extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Res',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 26',
        })
    }
}

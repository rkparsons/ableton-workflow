import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionMalletVolume extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Volume',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 7',
        })
    }
}

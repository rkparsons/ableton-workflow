import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso2Volume extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Volume',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 96',
        })
    }
}

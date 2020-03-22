import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Material extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Material',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 44',
            inputRange: [-1, 1],
        })
    }
}

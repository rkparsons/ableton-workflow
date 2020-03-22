import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Fine extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '+ / -',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 35',
            inputRange: [-50, 50],
        })
    }
}

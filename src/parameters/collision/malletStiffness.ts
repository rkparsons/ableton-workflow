import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class CollisionMalletStiffness extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Stiffness',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 10',
        })
    }
}

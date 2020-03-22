import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class CollisionReso1Time extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '< Time',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 39',
        })
    }
}

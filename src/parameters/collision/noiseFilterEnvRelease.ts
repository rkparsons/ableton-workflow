import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '../../models/valueParameter'

export class CollisionNoiseFilterEnvRelease extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'R \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 30',
            defaultValue: 1,
        })
    }
}

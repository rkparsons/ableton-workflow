import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMSync extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Sync',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 24',
            inputRange: [0, 127],
        })
    }
}

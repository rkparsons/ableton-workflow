import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereTimbre extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Timbre',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 2',
            inputRange: [0, 1],
            defaultValue: 0.5,
        })
    }
}

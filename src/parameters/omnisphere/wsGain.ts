import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSGain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Gain',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 28',
            defaultValue: 0.5,
        })
    }
}

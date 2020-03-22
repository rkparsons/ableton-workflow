import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerAmpTimeVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Time',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 71',
            inputRange: [-100, 100],
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerAmpSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 65',
            defaultValue: 1,
        })
    }
}

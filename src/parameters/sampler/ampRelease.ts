import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerAmpRelease extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'R \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 66',
            defaultValue: 1,
        })
    }
}

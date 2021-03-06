import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerOscLevel extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Amount',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 7',
        })
    }
}

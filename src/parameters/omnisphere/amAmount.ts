import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAMAmount extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Amount',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 16',
        })
    }
}

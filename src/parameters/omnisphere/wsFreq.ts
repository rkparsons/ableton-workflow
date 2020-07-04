import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 24',
        })
    }
}

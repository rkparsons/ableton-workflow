import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereTimbre extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 3',
            inputRange: [-1, 1],
        })
    }
}

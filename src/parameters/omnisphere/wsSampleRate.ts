import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSSampleRate extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Downsamp',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 26',
        })
    }
}

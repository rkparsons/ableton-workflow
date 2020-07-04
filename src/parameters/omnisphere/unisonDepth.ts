import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereUnisonDepth extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Depth',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 30',
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSBitCrush extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Crush',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 21',
        })
    }
}

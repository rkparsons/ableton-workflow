import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSBitCrush extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Crush',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 29',
            inputRange: [0, 127],
        })
    }
}

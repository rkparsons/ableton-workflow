import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAmpSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 83',
            inputRange: [0, 127],
            defaultValue: 127,
        })
    }
}

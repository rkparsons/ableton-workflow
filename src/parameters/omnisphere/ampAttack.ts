import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereAmpAttack extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'A /',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 81',
            inputRange: [0, 127],
            defaultValue: 40,
        })
    }
}

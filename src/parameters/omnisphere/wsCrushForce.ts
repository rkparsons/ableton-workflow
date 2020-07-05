import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSCrushForce extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Force',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 30',
            inputRange: [0, 127],
        })
    }
}

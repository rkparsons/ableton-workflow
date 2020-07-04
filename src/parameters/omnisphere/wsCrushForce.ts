import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereWSCrushForce extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Force',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 22',
        })
    }
}

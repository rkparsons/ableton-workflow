import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereStart extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 3',
        })
    }
}

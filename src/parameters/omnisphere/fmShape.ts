import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFMShape extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Shape',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 10',
        })
    }
}

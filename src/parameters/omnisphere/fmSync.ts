import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereFMSync extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Sync',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 12',
        })
    }
}

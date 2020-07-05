import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereFMTracking extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Tracking',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 10',
            options: ['off', 'on'],
            defaultValue: 1,
        })
    }
}

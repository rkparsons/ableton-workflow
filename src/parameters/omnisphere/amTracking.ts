import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereAMTracking extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Tracking',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 14',
            options: ['off', 'on'],
            defaultValue: 1,
        })
    }
}

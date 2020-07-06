import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereGranulatorDirection extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Style',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 45',
            options: ['up', 'down', 'up|down', 'up&down'],
        })
    }
}

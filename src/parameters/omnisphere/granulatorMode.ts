import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereGranulatorMode extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Mode',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 42',
            options: ['speed', 'position'],
        })
    }
}

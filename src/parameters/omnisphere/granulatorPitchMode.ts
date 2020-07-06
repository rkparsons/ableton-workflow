import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereGranulatorPitchMode extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Wild',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 46',
            options: ['-', 'on'],
        })
    }
}

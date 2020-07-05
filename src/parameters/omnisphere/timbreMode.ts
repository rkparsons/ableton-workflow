import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereTimbreMode extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Timbre',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 2',
            options: ['crush', 'shift'],
        })
    }
}

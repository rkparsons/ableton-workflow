import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereTimbreMode extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Timbre',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 1',
            options: ['crush', 'shift'],
        })
    }
}

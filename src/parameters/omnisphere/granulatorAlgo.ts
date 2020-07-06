import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

export class OmnisphereGranulatorAlgo extends EnumParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Algo',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 44',
            options: ['v2', 'legacy'],
        })
    }
}

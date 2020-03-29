import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class SamplerAmpLoopTime extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Time',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 69',
        })
    }
}

import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'
import unitType from '~/constants/unitType'

export class SamplerShaperLevel extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 105',
            unitType: unitType.INT,
            inputRange: [0, 100],
        })
    }
}

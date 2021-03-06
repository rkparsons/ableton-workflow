import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'
import unitType from '~/constants/unitType'

export class CCStartRandom extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 2',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

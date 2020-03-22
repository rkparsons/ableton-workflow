import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'
import unitType from '~/constants/unitType'

export class SamplerPitch extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Pitch',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 34',
            unitType: unitType.INT,
            inputRange: [-48, 48],
        })
    }
}

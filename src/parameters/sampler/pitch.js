import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerPitch extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Pitch',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 34',
            unitType: unitType.INT,
            inputRange: [-48, 48],
        })
    }
}

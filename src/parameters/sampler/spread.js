import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerSpread extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Spread',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 28',
            unitType: unitType.INT,
            inputRange: [0, 100],
        })
    }
}

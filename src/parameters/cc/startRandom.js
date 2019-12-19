import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCStartRandom extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 2',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

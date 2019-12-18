import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCStartRandom extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['CC']}`,
            path: 'parameters 2',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

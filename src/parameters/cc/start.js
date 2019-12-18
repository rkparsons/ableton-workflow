import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCStart extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Start',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['CC']}`,
            path: 'parameters 1',
            unitType: unitType.INT,
            inputRange: [0, 127],
            randomRange: [0, 0],
        })
    }
}

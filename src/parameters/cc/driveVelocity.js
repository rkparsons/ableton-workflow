import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCDriveVelocity extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['CC']}`,
            path: 'parameters 3',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

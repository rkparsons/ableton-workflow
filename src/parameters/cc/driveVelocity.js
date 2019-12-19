import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCDriveVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 3',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCDriveVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        // todo: handle device index better
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 3',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

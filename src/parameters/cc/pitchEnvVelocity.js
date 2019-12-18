import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCPitchEnvVelocity extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'PEnv',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['CC']}`,
            path: 'parameters 4',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

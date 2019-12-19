import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class CCPitchEnvVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'PEnv',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 4',
            unitType: unitType.INT,
            inputRange: [0, 127],
        })
    }
}

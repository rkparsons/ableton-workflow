import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerPitchEnv extends ValueParameter {
    // todo: create subclasses to integers/floats
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Env',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 38',
            unitType: unitType.INT,
            inputRange: [-48, 48],
        })
    }
}

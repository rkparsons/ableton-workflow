import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnv extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Env',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 85',
            inputRange: [-72, 72],
        })
    }
}

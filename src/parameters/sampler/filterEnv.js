import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnv extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Env',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 85',
            inputRange: [-72, 72],
        })
    }
}

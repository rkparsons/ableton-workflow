import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnvDecay extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 89',
            defaultValue: 1,
        })
    }
}

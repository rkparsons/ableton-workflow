import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpDecay extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 62',
            defaultValue: 1,
        })
    }
}

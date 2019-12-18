import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscEnvDecay extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 17',
            defaultValue: 1,
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class SamplerPitchEnvDecay extends ValueParameter {
    // todo: create generic AmpDecay baseclass
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 42',
        })
    }
}

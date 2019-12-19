import { ValueParameter } from '../../models/valueParameter'

export class SamplerPitchEnvDecay extends ValueParameter {
    // todo: create generic AmpDecay baseclass
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 42',
        })
    }
}

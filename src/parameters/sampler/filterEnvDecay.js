import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnvDecay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 89',
            defaultValue: 1,
        })
    }
}

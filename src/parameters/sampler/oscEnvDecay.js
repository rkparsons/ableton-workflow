import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscEnvDecay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 17',
            defaultValue: 1,
        })
    }
}

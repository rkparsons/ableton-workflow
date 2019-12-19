import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpDecay extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'D \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 62',
            defaultValue: 1,
        })
    }
}

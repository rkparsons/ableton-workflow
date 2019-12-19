import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 12',
        })
    }
}

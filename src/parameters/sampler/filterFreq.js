import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterFreq extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 80',
            defaultValue: 1,
        })
    }
}

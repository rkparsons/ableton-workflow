import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterFreq extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 80',
            defaultValue: 1,
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscFreq extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Freq',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 12',
        })
    }
}

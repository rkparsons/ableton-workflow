import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterLfo extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 102',
            inputRange: [0, 24],
        })
    }
}

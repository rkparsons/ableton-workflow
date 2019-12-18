import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterVelocity extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 101',
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscVelocity extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Osc',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 8',
        })
    }
}

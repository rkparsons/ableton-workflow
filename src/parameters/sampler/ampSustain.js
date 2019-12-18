import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpSustain extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 65',
            defaultValue: 1,
        })
    }
}

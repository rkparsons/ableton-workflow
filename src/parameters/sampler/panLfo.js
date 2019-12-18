import { ValueParameter } from '../../models/valueParameter'

export class SamplerPanLfo extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Pan',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 57',
        })
    }
}

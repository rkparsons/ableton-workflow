import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscLevel extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Amount',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 7',
        })
    }
}

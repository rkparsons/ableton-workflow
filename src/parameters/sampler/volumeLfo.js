import { ValueParameter } from '../../models/valueParameter'

export class SamplerVolumeLfo extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Vol',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 55',
        })
    }
}

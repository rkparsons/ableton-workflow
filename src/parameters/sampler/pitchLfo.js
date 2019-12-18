import { ValueParameter } from '../../models/valueParameter'

export class SamplerPitchLfo extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Pitch',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 36',
        })
    }
}

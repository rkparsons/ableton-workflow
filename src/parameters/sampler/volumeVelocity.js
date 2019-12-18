import { ValueParameter } from '../../models/valueParameter'

export class SamplerVolumeVelocity extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Vol',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 54',
        })
    }
}

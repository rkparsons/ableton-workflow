import { EnumParameter } from '../../models/enumParameter'

export class SamplerReverse extends EnumParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({ name: 'Playback', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 1', options: ['>>>', '<<<'], randomRange: [0, 0] })
    }
}

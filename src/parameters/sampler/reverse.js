import { EnumParameter } from '../../models/enumParameter'

export class SamplerReverse extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Playback', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 1', options: ['>>>', '<<<'], randomRange: [0, 0] })
    }
}

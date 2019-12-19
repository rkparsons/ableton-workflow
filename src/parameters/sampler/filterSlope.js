import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterSlope extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Slope', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 79', options: ['12 dB', '24 dB'] })
    }
}

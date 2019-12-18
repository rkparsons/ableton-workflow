import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterSlope extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({ name: 'Slope', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 79', options: ['12 dB', '24 dB'] })
    }
}

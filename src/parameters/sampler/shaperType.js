import { EnumParameter } from '../../models/enumParameter'

export class SamplerShaperType extends EnumParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({ name: 'Shaper', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 104', options: ['soft', 'hard', 'sine', '4bit'] })
    }
}

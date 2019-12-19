import { EnumParameter } from '../../models/enumParameter'

export class SamplerShaperType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Shaper', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 104', options: ['soft', 'hard', 'sine', '4bit'] })
    }
}

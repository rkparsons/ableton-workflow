import { EnumParameter } from '../../models/enumParameter'

export class SamplerAmpLoop extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Loop', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 68', options: ['none', 'loop', 'beat', 'sync', 'trig'] })
    }
}

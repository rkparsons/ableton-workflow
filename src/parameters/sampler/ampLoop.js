import { EnumParameter } from '../../models/enumParameter'

export class SamplerAmpLoop extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({ name: 'Loop', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 68', options: ['none', 'loop', 'beat', 'sync', 'trig'] })
    }
}

import { EnumParameter } from '../../models/enumParameter'

export class SamplerShaperPre extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({ name: 'Route', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 106', options: ['<<<', '>>>'] })
    }
}

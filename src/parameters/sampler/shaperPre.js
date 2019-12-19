import { EnumParameter } from '../../models/enumParameter'

export class SamplerShaperPre extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Route', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 106', options: ['<<<', '>>>'] })
    }
}

import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterType extends EnumParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({ name: 'Type', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 76', options: ['low -\\', 'high /-', 'band /\\', 'notch \\/'] })
    }
}

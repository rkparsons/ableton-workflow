import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterType extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Type', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 76', options: ['low -\\', 'high /-', 'band /\\', 'notch \\/'] })
    }
}

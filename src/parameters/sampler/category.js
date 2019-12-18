import { EnumParameter } from '../../models/enumParameter'

export class SamplerCategory extends EnumParameter {
    constructor({ pathToChain, deviceTypeToIndex, options }) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 29', options, isCategory: true })
    }
}

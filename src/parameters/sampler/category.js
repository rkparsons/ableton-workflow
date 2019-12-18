import { EnumParameter } from '../../models/enumParameter'

export class SamplerCategory extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 29', isCategory: true })
    }
}

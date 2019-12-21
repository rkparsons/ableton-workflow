import { EnumParameter } from '../../models/enumParameter'

export class SamplerMelodicCategory extends EnumParameter {
    constructor({ pathToChain, deviceIndex, options }) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 29', options, isCategory: true })
    }
}

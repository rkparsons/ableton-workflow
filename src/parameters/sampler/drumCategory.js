import { EnumParameter } from '../../models/enumParameter'

export class SamplerDrumCategory extends EnumParameter {
    constructor({ pathToChain, deviceIndex, options }) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 29', options, isCategory: true })
    }
}

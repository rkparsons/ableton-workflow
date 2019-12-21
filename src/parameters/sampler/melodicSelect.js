import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerMelodicSelect extends FilteredEnumParameter {
    constructor({ pathToChain, deviceIndex, optionGroups }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })
    }
}

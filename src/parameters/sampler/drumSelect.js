import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerDrumSelect extends FilteredEnumParameter {
    // todo: use named params
    constructor({ pathToChain, deviceIndex, optionGroups }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })
    }
}

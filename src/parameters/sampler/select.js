import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerSelect extends FilteredEnumParameter {
    // todo: use named params
    constructor({ pathToChain, deviceTypeToIndex, optionGroups }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 3', optionGroups, isSample: true })
    }
}

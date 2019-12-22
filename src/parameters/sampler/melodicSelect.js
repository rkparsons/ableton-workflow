import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerMelodicSelect extends FilteredEnumParameter {
    constructor({ pathToChain, deviceIndex, optionGroups, category }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })
        this.category = category
    }

    observeValue([property, value]) {
        if (property === this.property) {
            this.value = value - this.category.getChainSelectorOffset()
            this.callback()
        }
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.category.getChainSelectorOffset() + this.getOutputValue())
        }
    }
}

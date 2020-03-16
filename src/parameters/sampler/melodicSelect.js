import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerMelodicSelect extends FilteredEnumParameter {
    constructor({ pathToChain, deviceIndex, optionGroups, category }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })
        this.category = category
    }

    observeValue([property, value]) {
        if (property === this.property) {
            this.chainSelectorOffset = this.category.getChainSelectorOffset()
            this.value = value - this.chainSelectorOffset
            this.callback()
        }
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        const isCategoryChanged = this.category.getChainSelectorOffset() !== this.chainSelectorOffset
        const outputValue = isCategoryChanged ? this.category.getChainSelectorOffset() : this.category.getChainSelectorOffset() + this.getOutputValue()

        if (this.api) {
            this.api.set(this.property, outputValue)
        }
    }
}

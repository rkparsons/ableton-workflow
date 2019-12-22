import { FilteredEnumParameter } from '../../models/filteredEnumParameter'

export class SamplerMelodicSelect extends FilteredEnumParameter {
    constructor({ pathToChain, deviceIndex, optionGroups }) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })

        this.chainSelectorOffset = 0
    }

    observeValue([property, value]) {
        if (property === this.property) {
            this.value = value - this.chainSelectorOffset
            this.callback()
        }
    }

    filterOptions(optionGroupKey, chainSelectorOffset) {
        this.value = 0
        this.chainSelectorOffset = chainSelectorOffset
        this.options = this.optionGroups[optionGroupKey]
        this.optionKeys = Object.keys(this.options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = [this.min, this.max]
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.chainSelectorOffset + this.getOutputValue())
        }
    }
}

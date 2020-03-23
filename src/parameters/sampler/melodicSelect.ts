import { FilteredEnumParameter } from '~/models/filteredEnumParameter'
import { SamplerMelodicCategory } from '~/parameters/sampler/melodicCategory'

type Props = {
    pathToChain: string
    deviceIndex: number
    optionGroups: Map<string, string[]>
    category: SamplerMelodicCategory
}
export class SamplerMelodicSelect extends FilteredEnumParameter {
    category: SamplerMelodicCategory
    chainSelectorOffset: number

    constructor({ pathToChain, deviceIndex, optionGroups, category }: Props) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups })
        this.category = category
        this.chainSelectorOffset = 0
    }

    observeValue([property, value]: string[]) {
        if (property === this.property) {
            return
        }

        this.chainSelectorOffset = this.category.getChainSelectorOffset()
        this.value = Number(value) - this.chainSelectorOffset

        if (this.callback) {
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

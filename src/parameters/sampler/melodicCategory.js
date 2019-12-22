import { EnumParameter } from '../../models/enumParameter'
import log from '../../util/log'

export class SamplerMelodicCategory extends EnumParameter {
    constructor({ pathToChain, deviceIndex, options, optionGroups }) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', options, isCategory: true })
        this.categorySizes = this.getCategorySizes(optionGroups)
    }

    observeValue([property, chainSelector]) {
        if (property === this.property) {
            log('observeValue', this.getCategoryIndex(chainSelector))
            this.value = this.getCategoryIndex(chainSelector)
            this.callback()
        }
    }

    getCategorySizes(optionGroups) {
        let sizes = []

        for (key in optionGroups) {
            sizes.push(optionGroups[key].length)
        }

        return sizes
    }

    getCategoryIndex(chainSelector) {
        let sum = 0

        for (let categoryIndex = 0; categoryIndex < this.categorySizes.length; categoryIndex++) {
            const nextCategorySize = this.categorySizes[categoryIndex]

            if (chainSelector < sum + nextCategorySize) {
                return categoryIndex
            }

            sum += nextCategorySize
        }
    }

    getChainSelectorOffset() {
        return this.categorySizes.slice(0, this.getOutputValue()).reduce((a, b) => a + b, 0)
    }

    sendValue(delta) {
        log('sendValue', this.value, this.getIncrement(delta))
        this.value += this.getIncrement(delta)

        this.constrainAndSendValue()
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.getChainSelectorOffset())
        }
    }
}

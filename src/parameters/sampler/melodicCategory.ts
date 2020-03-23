import { EnumParameter } from '~/models/enumParameter'

type Props = {
    pathToChain: string
    deviceIndex: number
    options: string[]
    optionGroups: Record<string, string[]>
}
export class SamplerMelodicCategory extends EnumParameter {
    categorySizes: number[]

    constructor({ pathToChain, deviceIndex, options, optionGroups }: Props) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', options })
        this.categorySizes = Object.entries(optionGroups).map(([, value]) => value.length)
    }

    observeValue([property, chainSelector]: string[]) {
        if (property !== this.property) {
            return
        }

        const categoryIndex = this.getCategoryIndex(Number(chainSelector))

        if (categoryIndex) {
            this.value = categoryIndex
        }

        if (this.callback) {
            this.callback()
        }
    }

    getCategoryIndex(chainSelector: number) {
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

    sendValue(delta: number) {
        this.value += this.getIncrement(delta)

        this.constrainAndSendValue()
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)
    }
}

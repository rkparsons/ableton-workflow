import { EnumParameter } from './enumParameter'

export class FilteredEnumParameter extends EnumParameter {
    constructor({ displayName, livePath, property, defaultValue, optionGroups, isSample }) {
        super({ displayName, livePath, property, defaultValue, options: optionGroups[Object.keys(optionGroups)[0]] })
        this.optionGroups = optionGroups
        this.isSample = isSample
    }

    filterOptions(optionGroupKey) {
        this.value = 0
        this.options = this.optionGroups[optionGroupKey]
        this.optionKeys = Object.keys(this.options)
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = [this.min, this.max]
    }
}

import { EnumParameter } from '~/models/enumParameter'

type Props = {
    name: string
    basePath: string
    path?: string
    property?: string
    defaultValue?: number
    optionGroups: Record<string, string[]>
}

export class FilteredEnumParameter extends EnumParameter {
    optionGroups: Record<string, string[]>
    constructor({ name, basePath, path, property, defaultValue, optionGroups = {} }: Props) {
        super({ name, basePath, path, property, defaultValue, options: optionGroups[Object.keys(optionGroups)[0]] })
        this.optionGroups = optionGroups
    }

    filterOptions(optionGroupKey: string) {
        this.value = 0
        this.options = this.optionGroups[optionGroupKey]
        this.max = this.options.length - 1
        this.randomRange = [this.min, this.max]
    }
}

import { EnumParameter } from '~/models/enumParameter'

type Props = {
    name: string
    basePath: string
    path?: string
    property?: string
    defaultValue?: number
    optionGroups: Map<string, string[]>
}

export class FilteredEnumParameter extends EnumParameter {
    optionGroups: Map<string, string[]>
    constructor({ name, basePath, path, property, defaultValue, optionGroups = new Map() }: Props) {
        super({ name, basePath, path, property, defaultValue, options: optionGroups.entries().next().value })
        this.optionGroups = optionGroups
    }

    filterOptions(optionGroupKey: string) {
        this.value = 0
        const newOptions = this.optionGroups.get(optionGroupKey)

        if (newOptions) {
            this.options = newOptions
            this.max = this.options.length - 1
            this.randomRange = [this.min, this.max]
        }
    }
}

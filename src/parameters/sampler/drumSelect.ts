import { FilteredEnumParameter } from '~/models/filteredEnumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    optionGroups: Record<string, string[]>
}

export class SamplerDrumSelect extends FilteredEnumParameter {
    constructor({ pathToChain, deviceIndex, optionGroups }: Props) {
        super({ name: 'Sample', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 3', optionGroups, isSample: true })
    }
}

import { EnumParameter } from '~/models/enumParameter'
import { ParameterProps } from '~/types/parameterProps'

type Props = ParameterProps & {
    options: string[]
}

export class SamplerDrumCategory extends EnumParameter {
    constructor({ pathToChain, deviceIndex, options }: Props) {
        super({ name: 'Category', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 29', options })
    }
}

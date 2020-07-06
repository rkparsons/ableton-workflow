import { ParameterProps } from '~/types/parameterProps'
import { ValueParameter } from '~/models/valueParameter'

export class OmnisphereGranulatorSlider extends ValueParameter {
    constructor({ pathToChain, deviceIndex }: ParameterProps) {
        super({
            name: 'Slider',
            basePath: `${pathToChain} devices ${deviceIndex - 1}`,
            path: 'parameters 43',
            inputRange: [-1, 1],
        })
    }
}

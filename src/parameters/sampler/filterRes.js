import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterRes extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Res',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 81',
            inputRange: [0, 1.25],
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterRes extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Res',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 81',
            inputRange: [0, 1.25],
        })
    }
}

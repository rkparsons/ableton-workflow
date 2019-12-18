import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterDrive extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 83',
            inputRange: [0, 24],
        })
    }
}

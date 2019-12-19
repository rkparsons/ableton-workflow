import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterDrive extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Drive',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 83',
            inputRange: [0, 24],
        })
    }
}

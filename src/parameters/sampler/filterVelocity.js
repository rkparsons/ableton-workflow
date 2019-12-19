import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Filter',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 101',
        })
    }
}

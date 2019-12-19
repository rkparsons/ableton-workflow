import { ValueParameter } from '../../models/valueParameter'

export class SamplerPanLfo extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Pan',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 57',
        })
    }
}

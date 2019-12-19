import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscLevel extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Amount',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 7',
        })
    }
}

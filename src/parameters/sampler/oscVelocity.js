import { ValueParameter } from '../../models/valueParameter'

export class SamplerOscVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Osc',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 8',
        })
    }
}

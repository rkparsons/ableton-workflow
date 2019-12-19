import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnvAttack extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'A /',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 86',
        })
    }
}

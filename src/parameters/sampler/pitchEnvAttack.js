import { ValueParameter } from '../../models/valueParameter'

export class SamplerPitchEnvAttack extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'A /',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 39',
        })
    }
}

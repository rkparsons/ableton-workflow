import { ValueParameter } from '../../models/valueParameter'

export class SamplerFilterEnvAttack extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: 'A /',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 86',
        })
    }
}

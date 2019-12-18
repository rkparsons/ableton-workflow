import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpRelease extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'R \\',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 66',
            defaultValue: 1,
        })
    }
}

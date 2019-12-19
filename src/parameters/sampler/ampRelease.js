import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpRelease extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'R \\',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 66',
            defaultValue: 1,
        })
    }
}

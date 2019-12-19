import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpSustain extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'S --',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 65',
            defaultValue: 1,
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

export class SamplerVolumeVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Vol',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 54',
        })
    }
}

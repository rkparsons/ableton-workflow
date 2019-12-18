import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpTimeVelocity extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Time',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 71',
            inputRange: [-100, 100],
        })
    }
}

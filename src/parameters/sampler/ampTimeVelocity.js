import { ValueParameter } from '../../models/valueParameter'

export class SamplerAmpTimeVelocity extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Time',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 71',
            inputRange: [-100, 100],
        })
    }
}

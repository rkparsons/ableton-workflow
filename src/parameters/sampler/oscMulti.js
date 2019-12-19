import { EnumParameter } from '../../models/enumParameter'

export class SamplerOscMulti extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Multi', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 13', options: ['x  0.001', 'x  0.01', 'x  0.1', 'x  1', 'x 10'] })
    }
}

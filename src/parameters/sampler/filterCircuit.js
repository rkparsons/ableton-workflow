import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterCircuit extends EnumParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({ name: 'Circuit', basePath: `${pathToChain} devices ${deviceIndex}`, path: 'parameters 77', options: ['clean', 'osr', 'ms2', 'smp', 'prd'] })
    }
}

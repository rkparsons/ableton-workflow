import { EnumParameter } from '../../models/enumParameter'

export class SamplerFilterCircuit extends EnumParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({ name: 'Circuit', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 77', options: ['clean', 'osr', 'ms2', 'smp', 'prd'] })
    }
}

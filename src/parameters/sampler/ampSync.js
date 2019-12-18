import { EnumParameter } from '../../models/enumParameter'

export class SamplerAmpSync extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({ name: 'Sync', basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`, path: 'parameters 70', options: ['1/48', '1/32', '1/24', '1/16', '1/12', '1/8', '1/6', '1/4', '1/3', '1/2', '1', '1.5', '2', '3', '4'] })
    }
}

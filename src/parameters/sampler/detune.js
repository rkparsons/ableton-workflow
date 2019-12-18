import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerDetune extends ValueParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 35',
            unitType: unitType.INT,
            inputRange: [-50, 50],
        })
    }
}

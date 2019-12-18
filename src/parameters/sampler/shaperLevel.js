import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerShaperLevel extends ValueParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 105',
            unitType: unitType.INT,
            inputRange: [0, 100],
        })
    }
}

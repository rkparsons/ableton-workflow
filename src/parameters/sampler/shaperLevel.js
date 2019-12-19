import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerShaperLevel extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 105',
            unitType: unitType.INT,
            inputRange: [0, 100],
        })
    }
}

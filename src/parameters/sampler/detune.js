import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class SamplerDetune extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '- / +',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 35',
            unitType: unitType.INT,
            inputRange: [-50, 50],
        })
    }
}

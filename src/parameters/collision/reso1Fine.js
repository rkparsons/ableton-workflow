import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Fine extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: '+ / -',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 35',
            inputRange: [-50, 50],
        })
    }
}

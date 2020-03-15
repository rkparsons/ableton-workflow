import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Ratio extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Ratio',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 50',
        })
    }
}

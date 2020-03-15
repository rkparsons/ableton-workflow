import { ValueParameter } from '../../models/valueParameter'

export class CollisionReso1Inharmonics extends ValueParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Inharm',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 53',
            inputRange: [-1, 1],
        })
    }
}

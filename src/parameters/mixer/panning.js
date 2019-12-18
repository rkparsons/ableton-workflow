import { ValueParameter } from '../../models/valueParameter'

export class MixerPanning extends ValueParameter {
    constructor(pathToChain) {
        super({
            name: 'Panning',
            basePath: `${pathToChain} mixer_device`,
            path: 'panning',
            inputRange: [-1, 1],
        })
    }
}

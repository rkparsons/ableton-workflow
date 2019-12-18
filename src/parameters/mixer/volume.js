import { ValueParameter } from '../../models/valueParameter'

export class MixerVolume extends ValueParameter {
    constructor({ pathToChain }) {
        super({
            name: 'Volume',
            basePath: `${pathToChain} mixer_device`,
            path: 'volume',
            defaultValue: 0.85,
        })
    }
}

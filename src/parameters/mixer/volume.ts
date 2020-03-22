import { ValueParameter } from '~/models/valueParameter'

type Props = {
    pathToChain: string
}

export class MixerVolume extends ValueParameter {
    constructor({ pathToChain }: Props) {
        super({
            name: 'Volume',
            basePath: `${pathToChain} mixer_device`,
            path: 'volume',
            defaultValue: 0.85,
        })
    }
}

import { ValueParameter } from '../../models/valueParameter'

type Props = {
    pathToChain: string
}

export class MixerPanning extends ValueParameter {
    constructor({ pathToChain }: Props) {
        super({
            name: 'Panning',
            basePath: `${pathToChain} mixer_device`,
            path: 'panning',
            inputRange: [-1, 1],
        })
    }
}

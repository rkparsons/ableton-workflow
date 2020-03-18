import { EnumParameter } from '../../models/enumParameter'

type Props = {
    pathToChain: string
}

export class ChainMute extends EnumParameter {
    constructor({ pathToChain }: Props) {
        super({ name: 'Mute', basePath: pathToChain, property: 'mute', options: ['-', 'mute'] })
    }
}

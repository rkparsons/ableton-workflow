import { EnumParameter } from '../../models/enumParameter'

export class ChainMute extends EnumParameter {
    constructor(pathToChain) {
        super({ name: 'Mute', basePath: pathToChain, property: 'mute', options: [0, 1] })
    }
}

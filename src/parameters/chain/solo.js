import { EnumParameter } from '../../models/enumParameter'

export class ChainSolo extends EnumParameter {
    constructor(pathToChain) {
        super({ name: 'Solo', basePath: pathToChain, property: 'solo', options: ['off', 'on'], randomRange: [0, 0] })
    }
}

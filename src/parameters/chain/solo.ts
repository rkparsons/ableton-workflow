import { EnumParameter } from '~/models/enumParameter'

type Props = {
    pathToChain: string
}
export class ChainSolo extends EnumParameter {
    constructor({ pathToChain }: Props) {
        super({ name: 'Solo', basePath: pathToChain, property: 'solo', options: ['off', 'on'], randomRange: [0, 0] })
    }
}

import { ChainParam } from './chain'
import unitType from '../../constants/unitType'

export class ChainSolo extends ChainParam {
    constructor(pathToChain) {
        super(pathToChain)
        this.name = 'Solo'
        this.displayName = 'Solo'
        this.property = 'solo'
        this.options = ['off', 'on']
        this.randomRange = [0, 0]
        this.unitType = unitType.ENUM
    }
}

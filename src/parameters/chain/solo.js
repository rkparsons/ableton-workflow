import { ChainParam } from './chain'
import unitType from '../../constants/unitType'

export class ChainSolo extends ChainParam {
    constructor() {
        super()
        this.name = 'Solo'
        this.displayName = 'Solo'
        this.property = 'solo'
        this.path = ''
        this.options = ['off', 'on']
        this.randomRange = [0, 0]
        this.unitType = unitType.ENUM
    }
}

import { ChainParam } from './chain'
import unitType from '../../constants/unitType'

export class ChainMute extends ChainParam {
    constructor() {
        super()
        this.name = 'Mute'
        this.displayName = 'Mute'
        this.property = 'mute'
        this.options = [0, 1]
        this.unitType = unitType.ENUM
    }
}

import unitType from '../../constants/unitType'

export class ChainMute {
    constructor(pathToChain) {
        this.basePath = pathToChain
        this.path = ''
        this.name = 'Mute'
        this.property = 'mute'
        this.options = [0, 1]
        this.unitType = unitType.ENUM
    }
}

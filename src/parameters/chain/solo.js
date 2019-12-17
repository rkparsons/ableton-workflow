import unitType from '../../constants/unitType'

export class ChainSolo {
    constructor(pathToChain) {
        this.basePath = pathToChain
        this.path = ''
        this.name = 'Solo'
        this.displayName = 'Solo'
        this.property = 'solo'
        this.options = ['off', 'on']
        this.randomRange = [0, 0]
        this.unitType = unitType.ENUM
    }
}

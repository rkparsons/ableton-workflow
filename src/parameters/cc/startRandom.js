import unitType from '../../constants/unitType'

export class CCStartRandom {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['CC']}`
        this.inputRange = [0, 127]
        this.unitType = unitType.INT
        this.name = 'Start'
        this.path = 'parameters 2'
    }
}

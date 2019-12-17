import unitType from '../../constants/unitType'

export class CCDriveVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['CC']}`
        this.inputRange = [0, 127]
        this.unitType = unitType.INT
        this.name = 'DriveVelocity'
        this.displayName = 'Drive'
        this.path = 'parameters 3'
    }
}

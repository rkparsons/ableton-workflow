import { CCParam } from './cc'

export class CCDriveVelocity extends CCParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'DriveVelocity'
        this.displayName = 'Drive'
        this.path = 'parameters 3'
    }
}

import unitType from '../../constants/unitType'

export class CCPitchEnvVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['CC']}`
        this.inputRange = [0, 127]
        this.unitType = unitType.INT
        this.name = 'PitchEnvVelocity'
        this.displayName = 'PEnv'
        this.path = 'parameters 4'
    }
}

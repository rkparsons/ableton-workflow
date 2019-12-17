import unitType from '../../constants/unitType'

export class SamplerPitchEnv {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'PitchEnv'
        this.displayName = 'Env'
        this.path = 'parameters 38'
        this.inputRange = [-48, 48]
        this.unitType = unitType.INT
    }
}

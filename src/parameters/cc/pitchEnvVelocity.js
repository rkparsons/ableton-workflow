import { CCParam } from './cc'

export class CCPitchEnvVelocity extends CCParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'PitchEnvVelocity'
        this.displayName = 'PEnv'
        this.path = 'parameters 4'
    }
}

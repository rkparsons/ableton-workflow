import { CCParam } from './cc'

export class CCPitchEnvVelocity extends CCParam {
    constructor() {
        super()
        this.name = 'PitchEnvVelocity'
        this.displayName = 'PEnv'
        this.path = 'parameters 4'
    }
}

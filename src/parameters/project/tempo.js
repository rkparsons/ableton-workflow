import unitType from '../../constants/unitType'

export class ProjectTempo {
    constructor() {
        this.basePath = 'live_set'
        this.name = 'BPM'
        this.path = 'master_track mixer_device song_tempo'
        this.inputRange = [80, 180]
        this.speed = 0.1
        this.unitType = unitType.INT
        this.showValue = true
        this.isBpm = true
    }
}

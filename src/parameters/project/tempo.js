import { Param } from '../param'

export class ProjectTempo extends Param {
    constructor() {
        super()
        this.name = 'Tempo'
        this.displayName = 'BPM'
        this.path = 'master_track mixer_device song_tempo'
        this.inputRange = [80, 180]
        this.speed = 0.1
        this.unitType = unitType.INT
        this.showValue = true
    }
}

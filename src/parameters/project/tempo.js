import { ValueParameter } from '../../models/valueParameter'
import unitType from '../../constants/unitType'

export class ProjectTempo extends ValueParameter {
    constructor() {
        super({
            name: 'BPM',
            basePath: 'live_set',
            path: 'master_track mixer_device song_tempo',
            unitType: unitType.INT,
            inputRange: [80, 180],
            showValue: true,
            speed: 0.1,
            isBpm: true,
        })
    }
}

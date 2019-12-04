import { RepitchParameter } from './repitchParameter'

export class RepitchWarpParameter extends RepitchParameter {
    constructor(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        super(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange)
        this.observeTempo()
        this.sampleBpm = null
    }

    observeTempo() {
        this.tempoApi = new LiveAPI(this.handleTempoChange.bind(this), 'live_set master_track mixer_device song_tempo')
        this.tempoApi.property = 'value'
    }

    handleTempoChange([property, bpm]) {
        if (property === 'value') {
            this.projectBpm = Number(bpm)

            this.warp()
        }
    }

    default() {
        this.warp()
        this.constrainAndSendValue()
    }

    getTransposeFromChangeInBpm(originalBpm, newBpm) {
        return -12 * Math.log2(originalBpm / newBpm)
    }

    warpToSampleBpm(sampleBpm) {
        this.sampleBpm = sampleBpm

        this.warp()
    }

    warp() {
        if (this.projectBpm && this.sampleBpm) {
            this.value = -12 * Math.log2(this.sampleBpm / this.projectBpm)
        }
    }
}

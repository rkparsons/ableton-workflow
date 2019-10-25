import { RepitchParameter } from './repitchParameter'

export class RepitchWarpParameter extends RepitchParameter {
    constructor(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        super(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange)
        this.projectBpmApi = new LiveAPI(this.warpToProjectBpm, 'live_set master_track mixer_device song_tempo')
        this.sampleBpm = null
    }

    getTransposeFromChangeInBpm(originalBpm, newBpm) {
        return -12 * Math.log2(originalBpm / newBpm)
    }

    observe() {
        this.api.property = this.property
        this.projectBpmApi.property = 'value'
    }

    ignore() {
        this.api.property = null
        this.projectBpmApi.property = null
    }

    warpToProjectBpm([property, bpm]) {
        if (property === 'value') {
            this.projectBpm = Number(bpm)

            // log(this.sampleBpm, this.projectBpm, getTransposeFromChangeInBpm(this.sampleBpm, this.projectBpm))
        }
    }

    warp(sampleBpm) {
        this.sampleBpm = sampleBpm

        // log(this.sampleBpm, this.projectBpm, getTransposeFromChangeInBpm(this.sampleBpm, this.projectBpm))
    }
}

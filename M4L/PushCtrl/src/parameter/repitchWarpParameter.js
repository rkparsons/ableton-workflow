import { defclass } from '../util'
import { RepitchParameter } from './repitchParameter'
import { log, getTransposeFromChangeInBpm } from '../util'

export const RepitchWarpParameter = defclass(RepitchParameter, function() {
    this.constructor = function(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        RepitchParameter.call(this, displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange)
        this.projectBpmApi = new LiveAPI(this.warpToProjectBpm, 'live_set master_track mixer_device song_tempo')
        this.sampleBpm = null
    }

    this.observe = function() {
        this.api.property = this.property
        this.projectBpmApi.property = 'value'
    }

    this.ignore = function() {
        this.api.property = null
        this.projectBpmApi.property = null
    }

    this.warpToProjectBpm = function([property, bpm]) {
        if (property === 'value') {
            this.projectBpm = Number(bpm)

            log(this.sampleBpm, this.projectBpm, getTransposeFromChangeInBpm(this.sampleBpm, this.projectBpm))
        }
    }

    this.warp = function(sampleBpm) {
        this.sampleBpm = sampleBpm

        log(this.sampleBpm, this.projectBpm, getTransposeFromChangeInBpm(this.sampleBpm, this.projectBpm))
    }
})

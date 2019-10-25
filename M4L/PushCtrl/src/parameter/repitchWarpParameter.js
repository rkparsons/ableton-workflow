import { RepitchParameter } from './repitchParameter'
import { log } from '../util'

export class RepitchWarpParameter extends RepitchParameter {
    constructor(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        super(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange)
        this.sampleBpm = null
    }

    getTransposeFromChangeInBpm(originalBpm, newBpm) {
        return -12 * Math.log2(originalBpm / newBpm)
    }

    warpToProjectBpm(projectBpm) {
        this.projectBpm = projectBpm

        log('warpToProjectBpm', this.sampleBpm, this.projectBpm)
    }

    warpToSampleBpm(sampleBpm) {
        this.sampleBpm = sampleBpm

        log('warpToSampleBpm', this.sampleBpm, this.projectBpm)
    }
}

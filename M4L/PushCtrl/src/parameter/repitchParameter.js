import { defclass } from '../util'
import { ValueParameter } from './valueParameter'
import { log, getTransposeFromChangeInBpm } from '../util'

export const RepitchParameter = defclass(ValueParameter, function() {
    this.constructor = function(displayName, livePath, livePathDecimal, property, defaultValue, unitType, inputRange, randomRange) {
        ValueParameter.call(this, displayName, livePath, property, defaultValue, unitType, inputRange, randomRange)
        this.livePathDecimal = livePathDecimal
        this.projectBpmApi = new LiveAPI(this.warpToProjectBpm, 'live_set master_track mixer_device song_tempo')
        this.projectBpmApi.property = 'value'
        this.sampleBpm = null
    }

    this.onValueChanged = function(callback) {
        this.callback = callback
        this.api = new LiveAPI(null, this.livePath)
        this.api.property = this.property

        this.apiDecimal = new LiveAPI(null, this.livePathDecimal)
        this.apiDecimal.property = this.property
    }

    this.observeValue = function([property, newValue]) {
        if (property === this.property) {
            this.value = newValue + (this.value % 1)
            this.callback()
        }
    }

    this.observeValueDecimal = function([property, newValue]) {
        if (property === this.property) {
            this.value = Math.round(this.value) + newValue / 100
            this.callback()
        }
    }

    this.getDisplayValue = function() {
        return Math.round(this.value * 100) / 100
    }

    this.getIncrement = function(delta) {
        return delta < 50 ? 0.1 : -0.1
    }

    this.warpToProjectBpm = function([property, bpm]) {
        if (property === 'value') {
            this.projectBpm = Number(bpm)
        }
    }

    this.warpToSampleBpm = function(sampleBpm) {
        this.sampleBpm = sampleBpm

        if (this.sampleBpm) {
            log('projectBpm', this.projectBpm)
            log('getBpm', this.projectBpmApi.get('value'))
            const pitchChange = getTransposeFromChangeInBpm(this.sampleBpm, this.projectBpm)

            log('pitchChange', pitchChange)
        }
    }

    this.constrainAndSendValue = function() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        const remainder = this.value % 1
        const coarse = Math.abs(remainder) > 0.5 ? Math.round(this.value) : remainder > 0 ? Math.floor(this.value) : Math.ceil(this.value)
        const decimal = remainder < -0.5 ? remainder + 1 : remainder > 0.5 ? remainder - 1 : remainder
        const fine = Math.round(100 * decimal)

        if (this.api) {
            this.api.set(this.property, coarse)
            this.apiDecimal.set(this.property, fine)
        }
    }
})

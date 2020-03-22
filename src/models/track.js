/* eslint-disable */

import command from '~/constants/command'
import mode from '~/constants/mode'

export class Track {
    constructor(modes, trackIndex) {
        this.modes = modes
        this.activeMode = modes[0]
        this.liveSetViewApi = new LiveAPI(null, 'live_set view')
        this.trackId = parseInt(new LiveAPI(null, `live_set tracks ${trackIndex}`).id)
        this.isInitialised = false
    }

    initialise() {
        this.isInitialised = true
    }

    getMode() {
        return this.activeMode
    }

    setMode(modeType) {
        if (!this.isInitialised) {
            return
        }
        this.activeMode.ignore()
        this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
        this.activeMode.observe()
        this.activeMode.updateDisplay()
    }

    activate() {
        this.setMode(1)
        this.liveSetViewApi.set('selected_track', 'id', this.trackId)
    }

    deactivate() {
        this.setMode(mode.INACTIVE)
    }

    toggleActive() {
        if (!this.isInitialised) {
            return
        }

        if (this.activeMode.canHandle(mode.INACTIVE)) {
            // todo: move control surface activation into liveset
            this.activeMode.activateControlSurface()
            this.activate()
        } else {
            this.activeMode.deactivateControlSurface()
            this.deactivate()
        }
    }

    onSingleTrackModeButton() {
        this.setMode(mode.INSTRUMENT_RACK_MIXER)
    }

    onClipModeButton() {
        this.setMode(mode.INSTRUMENT_RACK_FX)
    }

    onDeviceModeButton() {
        this.setMode(mode.CHAIN_PARAMS)
    }

    onBrowseModeButton() {
        this.setMode(mode.CHAIN_FX)
    }

    onMasterSelectButton(isPressed) {
        this.getMode().setCommand(command.DEFAULT, isPressed)
    }

    onTrackStopButton(isPressed) {
        this.getMode().setCommand(command.RANDOM, isPressed)
    }

    onTrackControlTouches(isPressed, encoderIndex) {
        this.getMode().handleTrackControlTouches(isPressed, encoderIndex)
    }

    onTrackControls(value, encoderIndex) {
        this.getMode().sendValue(value, encoderIndex)
    }

    onTempoControl(encoderValue) {
        this.getMode().handleTempoControl(encoderValue)
    }

    onTrackSelectButtons(isPressed, buttonIndex) {
        this.getMode().handleTrackSelectButtons(isPressed, buttonIndex)
    }

    onTrackStateButtons(isPressed, buttonIndex) {
        this.getMode().handleTrackStateButtons(isPressed, buttonIndex)
    }

    onUpArrow() {
        this.getMode().decrementChain()
    }

    onDownArrow() {
        this.getMode().incrementChain()
    }
}

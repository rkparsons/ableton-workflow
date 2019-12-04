import { Track } from './track'
import command from '../constants/command'
import mode from '../constants/mode'

export class DrumTrack extends Track {
    constructor(modes, trackIndex) {
        super(modes, trackIndex)
    }

    onVolMixModeButton() {
        this.setMode(mode.DRUM_RACK_MIXER)
    }
    onPanSendModeButton() {
        this.setMode(mode.DRUM_RACK_FX)
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
        this.getMode().decrementDrumLayer()
    }

    onDownArrow() {
        this.getMode().incrementDrumLayer()
    }
}

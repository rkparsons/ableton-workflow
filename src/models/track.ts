import Command from '~/constants/command'
import Mode from '~/constants/mode'
import { UiMode } from '~/uiModes/uiMode'

export class Track {
    modes: UiMode[]
    activeMode: UiMode
    liveSetViewApi: LiveAPI
    trackId: number
    isInitialised: boolean

    constructor(modes: UiMode[], trackIndex: number) {
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

    setMode(modeType: Mode) {
        if (!this.isInitialised) {
            return
        }

        const newMode = this.modes.find(mode => mode.canHandle(modeType))

        if (newMode) {
            this.activeMode.ignore()
            this.activeMode = newMode
            this.activeMode.observe()
            this.activeMode.updateDisplay()
        }
    }

    activate() {
        this.setMode(1)
        this.liveSetViewApi.set('selected_track', 'id', this.trackId)
    }

    deactivate() {
        this.setMode(Mode.INACTIVE)
    }

    toggleActive() {
        if (!this.isInitialised) {
            return
        }

        if (this.activeMode.canHandle(Mode.INACTIVE)) {
            // todo: move control surface activation into liveset
            this.activeMode.activateControlSurface()
            this.activate()
        } else {
            this.activeMode.deactivateControlSurface()
            this.deactivate()
        }
    }

    onSingleTrackModeButton() {
        this.setMode(Mode.INSTRUMENT_RACK_MIXER)
    }

    onClipModeButton() {
        this.setMode(Mode.INSTRUMENT_RACK_FX)
    }

    onDeviceModeButton() {
        this.setMode(Mode.CHAIN_PARAMS)
    }

    onBrowseModeButton() {
        this.setMode(Mode.CHAIN_FX)
    }

    onMasterSelectButton(isPressed: boolean) {
        this.getMode().setCommand(Command.DEFAULT, isPressed)
    }

    onTrackStopButton(isPressed: boolean) {
        this.getMode().setCommand(Command.RANDOM, isPressed)
    }

    onTrackControlTouches(isPressed: boolean, encoderIndex: number) {
        this.getMode().handleTrackControlTouches(isPressed, encoderIndex)
    }

    onTrackControls(value: number, encoderIndex: number) {
        this.getMode().sendValue(value, encoderIndex)
    }

    onTempoControl(encoderValue: number) {
        this.getMode().handleTempoControl(encoderValue)
    }

    onTrackSelectButtons(isPressed: boolean, buttonIndex: number) {
        this.getMode().handleTrackSelectButtons(isPressed, buttonIndex)
    }

    onTrackStateButtons(isPressed: boolean, buttonIndex: number) {
        this.getMode().handleTrackStateButtons(isPressed, buttonIndex)
    }

    onUpArrow() {
        this.getMode().decrementChain()
    }

    onDownArrow() {
        this.getMode().incrementChain()
    }
}

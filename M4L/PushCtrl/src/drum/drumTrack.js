import { mode, command } from '../constants'

export function DrumTrack(drumRack, controlSurface, modes) {
    this.drumRack = drumRack
    this.controlSurface = controlSurface
    this.modes = modes
    this.activeMode = modes[0]
    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.setMode = function(modeType, isPressed = true) {
        if (isPressed) {
            this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
            this.activeMode.updateDisplay()
        }
    }

    this.pushToggleActive = function(isPressed) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)

            if (this.activeMode.canHandle(mode.INACTIVE)) {
                this.setMode(mode.LAYER_PARAMS)
                this.controlSurface.activate()
            } else {
                this.setMode(mode.INACTIVE)
                this.controlSurface.deactivate()
            }
        }

        this.activeMode.updateDisplay()
    }

    this.drumRack.onValueChanged(() => this.activeMode.updateDisplay())
    this.drumRack.onDrumPadSelected(([property, , drumPadId]) => this.activeMode.focusDrumPad(property, drumPadId))

    this.controlSurface.on('Tap_Tempo_Button', ([, isPressed]) => this.pushToggleActive(isPressed))
    this.controlSurface.onActive('Vol_Mix_Mode_Button', ([, isPressed]) => this.setMode(mode.RACK_MIXER, isPressed))
    this.controlSurface.onActive('Pan_Send_Mode_Button', ([, isPressed]) => this.setMode(mode.RACK_FX, isPressed))
    this.controlSurface.onActive('Single_Track_Mode_Button', ([, isPressed]) => this.setMode(mode.PAD_MIXER, isPressed))
    this.controlSurface.onActive('Clip_Mode_Button', ([, isPressed]) => this.setMode(mode.PAD_FX, isPressed))
    this.controlSurface.onActive('Device_Mode_Button', ([, isPressed]) => this.setMode(mode.LAYER_PARAMS, isPressed))
    this.controlSurface.onActive('Browse_Mode_Button', ([, isPressed]) => this.setMode(mode.LAYER_FX, isPressed))
    this.controlSurface.onActive('Master_Select_Button', ([, isPressed]) => this.activeMode.setCommand(command.DEFAULT, isPressed))
    this.controlSurface.onActive('Track_Stop_Button', ([, isPressed]) => this.activeMode.setCommand(command.RANDOM, isPressed))
    this.controlSurface.onActive('Track_Control_Touches', ([, isPressed, encoderIndex]) => this.activeMode.handleTrackControlTouches(isPressed, encoderIndex))
    this.controlSurface.onActive('Swing_Control', ([, delta]) => this.activeMode.setLayer(delta))
    this.controlSurface.onActive('Track_Controls', ([, value, encoderIndex]) => this.activeMode.sendValue(value, encoderIndex))
    this.controlSurface.onActive('Tempo_Control', ([, encoderValue]) => this.activeMode.handleTempoControl(encoderValue))
    this.controlSurface.onActive('Track_Select_Buttons', ([, isPressed, buttonIndex]) => this.activeMode.handleTrackSelectButtons(isPressed, buttonIndex))
    this.controlSurface.onActive('Track_State_Buttons', ([, isPressed, buttonIndex]) => this.activeMode.handleTrackStateButtons(isPressed, buttonIndex))
}

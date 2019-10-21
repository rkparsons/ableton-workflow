import { mode, command } from '../constants'
import { LayerFxMode } from '../modes/layerFxMode'
import { LayerParamsMode } from '../modes/layerParamsMode'
import { PadFxMode } from '../modes/padFxMode'
import { PadMixerMode } from '../modes/padMixerMode'
import { RackFxMode } from '../modes/rackFxMode'
import { RackMixerMode } from '../modes/rackMixerMode'
import { InactiveMode } from '../modes/inactiveMode'

export function DrumTrack(drumRack, controlSurface) {
    this.drumRack = drumRack
    this.controlSurface = controlSurface

    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    // todo: automate creation of all modes
    this.modes = [
        new RackMixerMode(this.drumRack, this.controlSurface),
        new RackFxMode(this.drumRack, this.controlSurface),
        new PadMixerMode(this.drumRack, this.controlSurface),
        new PadFxMode(this.drumRack, this.controlSurface),
        new LayerParamsMode(this.drumRack, this.controlSurface),
        new LayerFxMode(this.drumRack, this.controlSurface),
        new InactiveMode(this.drumRack, this.controlSurface),
    ]

    this.setMode = function(modeType, isPressed = true) {
        if (isPressed) {
            this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
            this.activeMode.updateDisplay()
        }
    }

    this.setMode(mode.INACTIVE)

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

    //todo: remove onActive, move these into control surface and hook with events
    this.controlSurface.on('Tap_Tempo_Button', ([, isPressed]) => this.pushToggleActive(isPressed))
    this.controlSurface.on('Vol_Mix_Mode_Button', ([, isPressed]) => this.setMode(mode.RACK_MIXER, isPressed))
    this.controlSurface.on('Pan_Send_Mode_Button', ([, isPressed]) => this.setMode(mode.RACK_FX, isPressed))
    this.controlSurface.on('Single_Track_Mode_Button', ([, isPressed]) => this.setMode(mode.PAD_MIXER, isPressed))
    this.controlSurface.on('Clip_Mode_Button', ([, isPressed]) => this.setMode(mode.PAD_FX, isPressed))
    this.controlSurface.on('Device_Mode_Button', ([, isPressed]) => this.setMode(mode.LAYER_PARAMS, isPressed))
    this.controlSurface.on('Browse_Mode_Button', ([, isPressed]) => this.setMode(mode.LAYER_FX, isPressed))
    this.controlSurface.on('Master_Select_Button', ([, isPressed]) => this.activeMode.setCommand(command.DEFAULT, isPressed))
    this.controlSurface.on('Track_Stop_Button', ([, isPressed]) => this.activeMode.setCommand(command.RANDOM, isPressed))
    this.controlSurface.on('Track_Control_Touches', ([, isPressed, encoderIndex]) => this.activeMode.handleTrackControlTouches(isPressed, encoderIndex))
    this.controlSurface.on('Swing_Control', ([, delta]) => this.activeMode.setLayer(delta))
    this.controlSurface.on('Track_Controls', ([, value, encoderIndex]) => this.activeMode.sendValue(value, encoderIndex))
    this.controlSurface.on('Tempo_Control', ([, encoderValue]) => this.activeMode.handleTempoControl(encoderValue))
    this.controlSurface.on('Track_Select_Buttons', ([, isPressed, buttonIndex]) => this.activeMode.handleTrackSelectButtons(isPressed, buttonIndex))
    this.controlSurface.on('Track_State_Buttons', ([, isPressed, buttonIndex]) => this.activeMode.handleTrackStateButtons(isPressed, buttonIndex))
}

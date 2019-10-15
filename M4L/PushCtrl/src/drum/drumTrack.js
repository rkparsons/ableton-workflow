import { mode, command } from '../constants'
import { LayerFxMode } from '../modes/layerFxMode'
import { LayerParamsMode } from '../modes/layerParamsMode'
import { PadFxMode } from '../modes/padFxMode'
import { PadMixerMode } from '../modes/padMixerMode'
import { RackFxMode } from '../modes/rackFxMode'
import { RackMixerMode } from '../modes/rackMixerMode'
import { log } from '../util'

export function DrumTrack(drumRack, controlSurface) {
    this.isActive = false
    this.command = null
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
    ]

    this.setMode = function(modeType, [, isPressed]) {
        if (isPressed) {
            this.activeMode = this.modes.find(mode => mode.canHandle(modeType))
            this.activeMode.updateDisplay()
        }
    }

    this.setMode(mode.LAYER_PARAMS, [, true])

    this.setCommand = function(command, [, isPressed]) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            this.activeMode.executePageLevelCommand(this.command)
            this.command = null
        }
    }

    this.executeParamLevelCommand = function([, isPressed, encoderIndex]) {
        if (isPressed && this.command !== null) {
            this.activeMode.executeParamLevelCommand(this.command, encoderIndex)
            this.command = null
        }
    }

    this.setLayer = function([, delta]) {
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        this.activeMode.updateDisplay()
    }

    this.pushToggleActive = function([, isPressed]) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else if (this.isActive) {
            this.activeMode.updateDisplay()
        }
    }

    this.focusDrumPad = function([property, , drumPadId]) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)

        if (this.isActive) {
            this.activeMode.updateDisplay()
        }
    }

    this.drumRack.onValueChanged(args => this.activeMode.updateDisplay(args))
    this.drumRack.onDrumPadSelected(args => this.focusDrumPad(args))

    this.controlSurface.on('Tap_Tempo_Button', args => this.pushToggleActive(args))
    this.controlSurface.onActive('Swing_Control', args => this.setLayer(args))
    this.controlSurface.onActive('Vol_Mix_Mode_Button', args => this.setMode(mode.RACK_MIXER, args))
    this.controlSurface.onActive('Pan_Send_Mode_Button', args => this.setMode(mode.RACK_FX, args))
    this.controlSurface.onActive('Single_Track_Mode_Button', args => this.setMode(mode.PAD_MIXER, args))
    this.controlSurface.onActive('Clip_Mode_Button', args => this.setMode(mode.PAD_FX, args))
    this.controlSurface.onActive('Device_Mode_Button', args => this.setMode(mode.LAYER_PARAMS, args))
    this.controlSurface.onActive('Browse_Mode_Button', args => this.setMode(mode.LAYER_FX, args))

    this.controlSurface.onActive('Master_Select_Button', args => this.setCommand(command.DEFAULT, args))
    this.controlSurface.onActive('Track_Stop_Button', args => this.setCommand(command.RANDOM, args))
    this.controlSurface.onActive('Track_Control_Touches', args => this.executeParamLevelCommand(args))
    this.controlSurface.onActive('Track_Controls', args => this.activeMode.sendValue(args))
    this.controlSurface.onActive('Tempo_Control', args => this.activeMode.handleTempoControl(args))
    this.controlSurface.onActive('Track_State_Buttons', args => this.activeMode.handleTrackStateButtons(args))
    this.controlSurface.onActive('Track_Select_Buttons', args => this.activeMode.handleTrackSelectButtons(args))
}

import { mode, command } from '../constants'
import { DrumTrackMode } from '../modes/drumTrackMode'
import { log } from '../util'

//todo: run isActive check before, and updateDisplay after, every method call
export function DrumTrack(drumRack, controlSurface) {
    this.isActive = false
    this.modeKey = mode.LAYER_PARAMS
    this.command = null
    this.drumRack = drumRack
    this.controlSurface = controlSurface

    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.modes = {}
    this.modes[mode.RACK_MIXER] = new DrumTrackMode(this.drumRack, this.controlSurface)
    this.modes[mode.RACK_FX] = new DrumTrackMode(this.drumRack, this.controlSurface)
    this.modes[mode.PAD_MIXER] = new DrumTrackMode(this.drumRack, this.controlSurface)
    this.modes[mode.PAD_FX] = new DrumTrackMode(this.drumRack, this.controlSurface)
    this.modes[mode.LAYER_PARAMS] = new DrumTrackMode(this.drumRack, this.controlSurface)
    this.modes[mode.LAYER_FX] = new DrumTrackMode(this.drumRack, this.controlSurface)

    this.getMode = function() {
        return this.modes[this.modeKey]
    }

    this.setMode = function(targetModeKey, [, isPressed]) {
        if (isPressed) {
            this.modeKey = targetModeKey

            //temp remove this
            this.modes[mode.RACK_MIXER].setMode(targetModeKey)
            this.modes[mode.RACK_FX].setMode(targetModeKey)
            this.modes[mode.PAD_MIXER].setMode(targetModeKey)
            this.modes[mode.PAD_FX].setMode(targetModeKey)
            this.modes[mode.LAYER_PARAMS].setMode(targetModeKey)
            this.modes[mode.LAYER_FX].setMode(targetModeKey)

            this.getMode().updateDisplay()
        }
    }

    this.setCommand = function(command, [, isPressed]) {
        if (isPressed) {
            this.command = command
        } else if (this.command !== null) {
            this.getMode().executePageLevelCommand(this.command)
            this.command = null
        }
    }

    this.executeParamLevelCommand = function([, isPressed, encoderIndex]) {
        if (isPressed && this.command !== null) {
            this.getMode().executeParamLevelCommand(this.command, isPressed, encoderIndex)
            this.command = null
        }
    }

    this.setLayer = function([, delta]) {
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        this.getMode().updateDisplay()
    }

    this.pushToggleActive = function([, isPressed]) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else if (this.isActive) {
            this.getMode().updateDisplay()
        }
    }

    this.focusDrumPad = function([property, , drumPadId]) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)

        if (this.isActive) {
            this.getMode().updateDisplay()
        }
    }

    this.drumRack.onValueChanged(args => this.getMode().updateDisplay(args))
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
    this.controlSurface.onActive('Track_Controls', args => this.getMode().sendValue(args))
    this.controlSurface.onActive('Tempo_Control', args => this.getMode().handleTempoControl(args))
    this.controlSurface.onActive('Track_State_Buttons', args => this.getMode().handleTrackStateButtons(args))
    this.controlSurface.onActive('Track_Select_Buttons', args => this.getMode().handleTrackSelectButtons(args))
}

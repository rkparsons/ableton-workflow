import { mode, command } from '../constants'
import { DrumTrackMode } from '../modes/drumTrackMode'

//todo: run isActive check before, and updateDisplay after, every method call
export function DrumTrack(drumRack, controlSurface) {
    this.isActive = false
    this.previousMode = mode.LAYER_PARAMS
    this.mode = mode.LAYER_PARAMS
    this.drumRack = drumRack
    this.controlSurface = controlSurface

    this.liveSetViewApi = new LiveAPI(null, 'live_set view')
    this.trackId = parseInt(new LiveAPI(null, 'this_device canonical_parent').id)

    this.drumTrackMode = new DrumTrackMode(this.drumRack, this.controlSurface, this.trackId, this.liveSetViewApi)

    this.setMode = function(targetMode, [, isPressed]) {
        if (isPressed) {
            this.previousMode = this.mode
            this.mode = targetMode
            this.drumTrackMode.setMode(targetMode)
            this.drumTrackMode.updateDisplay()
        }
    }

    this.setLayer = function([, delta]) {
        const drumLayerIncrement = 0.1 * (delta < 50 ? delta : delta - 128)

        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer(drumLayerIncrement)
        this.drumTrackMode.updateDisplay()
    }

    this.pushToggleActive = function([, isPressed]) {
        if (isPressed) {
            this.liveSetViewApi.set('selected_track', 'id', this.trackId)
            this.isActive = !this.isActive
            this.isActive ? this.controlSurface.activate() : this.controlSurface.deactivate()
        } else if (this.isActive) {
            this.drumTrackMode.updateDisplay()
        }
    }

    this.focusDrumPad = function([property, , drumPadId]) {
        if (property !== 'selected_drum_pad') {
            return
        }

        this.drumRack.setActiveDrumPad(drumPadId)

        if (this.isActive) {
            this.drumTrackMode.updateDisplay()
        }
    }

    this.drumRack.onValueChanged(args => this.drumTrackMode.updateDisplay(args))
    this.drumRack.onDrumPadSelected(args => this.focusDrumPad(args))

    this.controlSurface.on('Tap_Tempo_Button', args => this.pushToggleActive(args))
    this.controlSurface.onActive('Swing_Control', args => this.setLayer(args))
    this.controlSurface.onActive('Vol_Mix_Mode_Button', args => this.setMode(mode.RACK_MIXER, args))
    this.controlSurface.onActive('Pan_Send_Mode_Button', args => this.setMode(mode.RACK_FX, args))
    this.controlSurface.onActive('Single_Track_Mode_Button', args => this.setMode(mode.PAD_MIXER, args))
    this.controlSurface.onActive('Clip_Mode_Button', args => this.setMode(mode.PAD_FX, args))
    this.controlSurface.onActive('Device_Mode_Button', args => this.setMode(mode.LAYER_PARAMS, args))
    this.controlSurface.onActive('Browse_Mode_Button', args => this.setMode(mode.LAYER_FX, args))

    this.controlSurface.onActive('Master_Select_Button', args => this.drumTrackMode.setCommand(command.DEFAULT, args))
    this.controlSurface.onActive('Track_Stop_Button', args => this.drumTrackMode.setCommand(command.RANDOM, args))
    this.controlSurface.onActive('Track_Controls', args => this.drumTrackMode.sendValue(args))
    this.controlSurface.onActive('Tempo_Control', args => this.drumTrackMode.handleTempoControl(args))
    this.controlSurface.onActive('Track_Control_Touches', args => this.drumTrackMode.executeParamLevelCommand(args))
    this.controlSurface.onActive('Track_State_Buttons', args => this.drumTrackMode.handleTrackStateButtons(args))
    this.controlSurface.onActive('Track_Select_Buttons', args => this.drumTrackMode.handleTrackSelectButtons(args))
}

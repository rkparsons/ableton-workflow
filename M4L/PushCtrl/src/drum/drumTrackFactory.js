import { command, mode } from '../constants'

import { DrumTrack } from './drumTrack'
import { createControlSurface } from '../controlSurface/controlSurfaceFactory'
import { createDrumRack } from './drumRackFactory'
import { createModes } from '../modes/modeFactory'
import { log } from '../util'
import { pushTapTempoControl } from '../constants'

export default function(samplesFolder) {
    const drumRack = createDrumRack(samplesFolder) //todo: move drumRack into drumTrack
    const controlSurface = createControlSurface(pushTapTempoControl)
    const modes = createModes(drumRack, controlSurface)
    const drumTrack = new DrumTrack(modes)

    drumRack.onValueChanged(() => drumTrack.getMode().updateDisplay())
    drumRack.onDrumPadSelected(([property, , drumPadId]) => drumTrack.getMode().focusDrumPad(property, drumPadId))

    controlSurface.on('Tap_Tempo_Button', ([, isPressed]) => (isPressed ? drumTrack.toggleActive() : drumTrack.getMode().updateDisplay()))
    controlSurface.onActive('Vol_Mix_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.RACK_MIXER))
    controlSurface.onActive('Pan_Send_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.RACK_FX))
    controlSurface.onActive('Single_Track_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.PAD_MIXER))
    controlSurface.onActive('Clip_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.PAD_FX))
    controlSurface.onActive('Device_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.LAYER_PARAMS))
    controlSurface.onActive('Browse_Mode_Button', ([, isPressed]) => isPressed && drumTrack.setMode(mode.LAYER_FX))
    controlSurface.onActive('Master_Select_Button', ([, isPressed]) => drumTrack.getMode().setCommand(command.DEFAULT, isPressed))
    controlSurface.onActive('Track_Stop_Button', ([, isPressed]) => drumTrack.getMode().setCommand(command.RANDOM, isPressed))
    controlSurface.onActive('Track_Control_Touches', ([, isPressed, encoderIndex]) => drumTrack.getMode().handleTrackControlTouches(isPressed, encoderIndex))

    controlSurface.onActive('Track_Controls', ([, value, encoderIndex]) => drumTrack.getMode().sendValue(value, encoderIndex))
    controlSurface.onActive('Tempo_Control', ([, encoderValue]) => drumTrack.getMode().handleTempoControl(encoderValue))
    controlSurface.onActive('Track_Select_Buttons', ([, isPressed, buttonIndex]) => drumTrack.getMode().handleTrackSelectButtons(isPressed, buttonIndex))
    controlSurface.onActive('Track_State_Buttons', ([, isPressed, buttonIndex]) => drumTrack.getMode().handleTrackStateButtons(isPressed, buttonIndex))

    controlSurface.onActive('Up_Arrow', ([, isPressed]) => isPressed && drumTrack.getMode().decrementDrumLayer())
    controlSurface.onActive('Down_Arrow', ([, isPressed]) => isPressed && drumTrack.getMode().incrementDrumLayer())

    return drumTrack
}

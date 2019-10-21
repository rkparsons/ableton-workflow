import { mode, command } from '../constants'
import { DrumTrack } from './drumTrack'
import { createDrumRack } from './drumRackFactory'
import { createControlSurface } from '../controlSurface/controlSurfaceFactory'
import { createModes } from '../modes/modeFactory'
import { pushTapTempoControl } from '../constants'

export default function(samplesFolder) {
    const drumRack = createDrumRack(samplesFolder)
    const controlSurface = createControlSurface(pushTapTempoControl)
    const modes = createModes(drumRack, controlSurface)
    const drumTrack = new DrumTrack(drumRack, controlSurface, modes)

    //todo: move modes into control surface

    drumRack.onValueChanged(() => drumTrack.getMode().updateDisplay())
    drumRack.onDrumPadSelected(([property, , drumPadId]) => drumTrack.getMode().focusDrumPad(property, drumPadId))
    controlSurface.on('Tap_Tempo_Button', ([, isPressed]) => drumTrack.toggleActive(isPressed))
    controlSurface.onActive('Vol_Mix_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.RACK_MIXER, isPressed))
    controlSurface.onActive('Pan_Send_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.RACK_FX, isPressed))
    controlSurface.onActive('Single_Track_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.PAD_MIXER, isPressed))
    controlSurface.onActive('Clip_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.PAD_FX, isPressed))
    controlSurface.onActive('Device_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.LAYER_PARAMS, isPressed))
    controlSurface.onActive('Browse_Mode_Button', ([, isPressed]) => drumTrack.setMode(mode.LAYER_FX, isPressed))
    controlSurface.onActive('Master_Select_Button', ([, isPressed]) => drumTrack.getMode().setCommand(command.DEFAULT, isPressed))
    controlSurface.onActive('Track_Stop_Button', ([, isPressed]) => drumTrack.getMode().setCommand(command.RANDOM, isPressed))
    controlSurface.onActive('Track_Control_Touches', ([, isPressed, encoderIndex]) => drumTrack.getMode().handleTrackControlTouches(isPressed, encoderIndex))
    controlSurface.onActive('Swing_Control', ([, delta]) => drumTrack.getMode().setLayer(delta))
    controlSurface.onActive('Track_Controls', ([, value, encoderIndex]) => drumTrack.getMode().sendValue(value, encoderIndex))
    controlSurface.onActive('Tempo_Control', ([, encoderValue]) => drumTrack.getMode().handleTempoControl(encoderValue))
    controlSurface.onActive('Track_Select_Buttons', ([, isPressed, buttonIndex]) => drumTrack.getMode().handleTrackSelectButtons(isPressed, buttonIndex))
    controlSurface.onActive('Track_State_Buttons', ([, isPressed, buttonIndex]) => drumTrack.getMode().handleTrackStateButtons(isPressed, buttonIndex))

    return drumTrack
}

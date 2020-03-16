// import { Liveset } from '../models/liveset'
// import createBassTrack from './bassTrackFactory'

import { createControlSurface } from '~/factories/controlSurfaceFactory'
import log from '~/util/log'

// import createDrumTrack from './drumTrackFactory'
// import path from 'path'



export function createLiveset(pathToPatcher: string) {
    const controlSurface = createControlSurface('Tap_Tempo_Button')
    // const pathToSamples = path.join(pathToPatcher, '..', 'samples')
    // // todo: find name/index dynamically
    // const drumTrack = createDrumTrack(controlSurface, pathToSamples, 'Drum', 0)
    // const bassTrack = createBassTrack(controlSurface, pathToSamples, 'Bass', 1)
    // const liveset = new Liveset([drumTrack, bassTrack])
    // controlSurface.on('Tap_Tempo_Button', ([, isPressed]) => liveset.toggleActive(isPressed))
    // controlSurface.onActive('Vol_Mix_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onVolMixModeButton())
    // controlSurface.onActive('Pan_Send_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onPanSendModeButton())
    // controlSurface.onActive('Single_Track_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onSingleTrackModeButton())
    // controlSurface.onActive('Clip_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onClipModeButton())
    // controlSurface.onActive('Device_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onDeviceModeButton())
    // controlSurface.onActive('Browse_Mode_Button', ([, isPressed]) => isPressed && liveset.getTrack().onBrowseModeButton())
    // controlSurface.onActive('Master_Select_Button', ([, isPressed]) => liveset.getTrack().onMasterSelectButton(isPressed))
    // controlSurface.onActive('Track_Stop_Button', ([, isPressed]) => liveset.getTrack().onTrackStopButton(isPressed))
    // controlSurface.onActive('Track_Control_Touches', ([, isPressed, encoderIndex]) => liveset.getTrack().onTrackControlTouches(isPressed, encoderIndex))
    // controlSurface.onActive('Track_Controls', ([, value, encoderIndex]) => liveset.getTrack().onTrackControls(value, encoderIndex))
    // controlSurface.onActive('Tempo_Control', ([, encoderValue]) => liveset.getTrack().onTempoControl(encoderValue))
    // controlSurface.onActive('Track_Select_Buttons', ([, isPressed, buttonIndex]) => liveset.getTrack().onTrackSelectButtons(isPressed, buttonIndex))
    // controlSurface.onActive('Track_State_Buttons', ([, isPressed, buttonIndex]) => liveset.getTrack().onTrackStateButtons(isPressed, buttonIndex))
    // controlSurface.onActive('Up_Arrow', ([, isPressed]) => isPressed && liveset.getTrack().onUpArrow())
    // controlSurface.onActive('Down_Arrow', ([, isPressed]) => isPressed && liveset.getTrack().onDownArrow())
    // controlSurface.onActive('Left_Arrow', ([, isPressed]) => isPressed && liveset.decrementTrack())
    // controlSurface.onActive('Right_Arrow', ([, isPressed]) => isPressed && liveset.incrementTrack())
    // return liveset
}

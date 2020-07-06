import ControlName from '~/constants/controlName'
import { Liveset } from '~/models/liveset'
import { Track } from '~/models/track'
import { createControlSurface } from '~/factories/controlSurfaceFactory'
import createDrumTrack from '~/factories/drumTrackFactory'
import createOmnisphereTrack from '~/factories/omnisphereTrackFactory'
import log from '~/util/log'
import path from 'path'

// import createBassTrack from '~/factories/bassTrackFactory'

export function createLiveset(pathToPatcher: string) {
    const controlSurface = createControlSurface(ControlName.TAP_TEMPO_BUTTON)
    const pathToSamples = path.join(pathToPatcher, '..', 'samples')
    const trackCount = new LiveAPI(null, 'live_set').get('tracks').length / 2
    let tracks: Track[] = []

    for (let i = 0; i < trackCount; i++) {
        const trackName = new LiveAPI(null, `live_set tracks ${i}`).get('name').toString().trim()

        if (trackName === 'Drum') {
            tracks.push(createDrumTrack(controlSurface, pathToSamples, 'Drum', i))
        } else if (trackName === 'Omni') {
            const omniTrack = createOmnisphereTrack(controlSurface, i)
            if (omniTrack) {
                tracks.push(omniTrack)
            }
        }
    }

    const liveset = new Liveset(tracks)
    controlSurface.on(ControlName.TAP_TEMPO_BUTTON, ([, isPressed]) => liveset.toggleActive(isPressed))
    controlSurface.onActive(ControlName.VOL_MIX_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onVolMixModeButton())
    controlSurface.onActive(ControlName.PAN_SEND_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onPanSendModeButton())
    controlSurface.onActive(ControlName.SINGLE_TRACK_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onSingleTrackModeButton())
    controlSurface.onActive(ControlName.CLIP_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onClipModeButton())
    controlSurface.onActive(ControlName.DEVICE_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onDeviceModeButton())
    controlSurface.onActive(ControlName.BROWSE_MODE_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onBrowseModeButton())
    controlSurface.onActive(ControlName.IN_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onInButton())
    controlSurface.onActive(ControlName.OUT_BUTTON, ([, isPressed]) => isPressed && liveset.getTrack().onOutButton())
    controlSurface.onActive(ControlName.MASTER_SELECT_BUTTON, ([, isPressed]) => liveset.getTrack().onMasterSelectButton(isPressed))
    controlSurface.onActive(ControlName.TRACK_STOP_BUTTON, ([, isPressed]) => liveset.getTrack().onTrackStopButton(isPressed))
    controlSurface.onActive(ControlName.TRACK_CONTROL_TOUCHES, ([, isPressed, encoderIndex]) => liveset.getTrack().onTrackControlTouches(isPressed, encoderIndex))
    controlSurface.onActive(ControlName.TRACK_CONTROLS, ([, value, encoderIndex]) => liveset.getTrack().onTrackControls(value, encoderIndex))
    controlSurface.onActive(ControlName.TEMPO_CONTROL, ([, encoderValue]) => liveset.getTrack().onTempoControl(encoderValue))
    controlSurface.onActive(ControlName.TRACK_SELECT_BUTTONS, ([, isPressed, buttonIndex]) => liveset.getTrack().onTrackSelectButtons(isPressed, buttonIndex))
    controlSurface.onActive(ControlName.TRACK_STATE_BUTTONS, ([, isPressed, buttonIndex]) => liveset.getTrack().onTrackStateButtons(isPressed, buttonIndex))
    controlSurface.onActive(ControlName.UP_ARROW, ([, isPressed]) => isPressed && liveset.getTrack().onUpArrow())
    controlSurface.onActive(ControlName.DOWN_ARROW, ([, isPressed]) => isPressed && liveset.getTrack().onDownArrow())
    controlSurface.onActive(ControlName.LEFT_ARROW, ([, isPressed]) => isPressed && liveset.decrementTrack())
    controlSurface.onActive(ControlName.RIGHT_ARROW, ([, isPressed]) => isPressed && liveset.incrementTrack())
    return liveset
}

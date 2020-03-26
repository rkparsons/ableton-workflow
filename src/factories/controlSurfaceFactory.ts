import ControlName from '~/constants/controlName'
import { ControlSurface } from '~/models/controlSurface'

export function createControlSurface(onOffControlName: ControlName) {
    return new ControlSurface(onOffControlName)
}

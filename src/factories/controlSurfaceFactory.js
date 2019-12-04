import { ControlSurface } from '../models/controlSurface'

export function createControlSurface(onOffControlName) {
    return new ControlSurface(onOffControlName)
}

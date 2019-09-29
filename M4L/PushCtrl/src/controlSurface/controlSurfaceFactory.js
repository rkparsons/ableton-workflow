import { ControlSurface } from './controlSurface'

export function createControlSurface(onOffControlName) {
    return new ControlSurface(onOffControlName)
}

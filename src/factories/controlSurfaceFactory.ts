import { ControlSurface } from '~/models/controlSurface'

export function createControlSurface(onOffControlName: string) {
    return new ControlSurface(onOffControlName)
}

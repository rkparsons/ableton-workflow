import createDrumTrack from '../drum/drumTrackFactory'
import { log } from '../util'

const path = require('path')

export default function init() {
    log('init')
    const drumTrack = createDrumTrack(path.join(this.patcher.filepath, '..', '..', 'samples'))
    drumTrack.initialise()
}

import createDrumTrack from '../drum/drumTrackFactory'
import 'core-js/stable'

const path = require('path')

export default function initLiveApi() {
    createDrumTrack(path.join(this.patcher.filepath, '..', '..', 'samples'))
}

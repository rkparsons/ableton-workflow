import 'core-js/stable'
import createDrumTrack from '../drum/drumTrackFactory'
const path = require('path')

export default function initLiveApi() {
    createDrumTrack(path.join(this.patcher.filepath, '..', '..', 'samples'))
}

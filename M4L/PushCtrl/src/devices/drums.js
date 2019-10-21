import createDrumTrack from '../drum/drumTrackFactory'
//todo: reduce size of import
import 'core-js/stable'

const path = require('path')

export default function initLiveApi() {
    createDrumTrack(path.join(this.patcher.filepath, '..', '..', 'samples'))
}

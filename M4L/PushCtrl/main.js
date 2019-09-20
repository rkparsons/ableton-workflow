include('log')

function initLiveApi() {
    const { createDrumTrack } = require('drumTrackFactory')

    const samplesFolder = this.patcher.filepath.slice(0, this.patcher.filepath.lastIndexOf('/')) + '/Samples'
    const drumTrack = createDrumTrack(samplesFolder)
}

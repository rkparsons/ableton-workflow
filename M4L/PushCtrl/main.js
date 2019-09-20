function initLiveApi() {
    const { DrumTrackFactory } = require('drumTrackFactory')

    const samplesFolder = this.patcher.filepath.slice(0, this.patcher.filepath.lastIndexOf('/')) + '/Samples'
    const drumTrack = new DrumTrackFactory(samplesFolder).create()
}

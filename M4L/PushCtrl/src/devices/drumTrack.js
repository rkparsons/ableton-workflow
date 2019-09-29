import createDrumTrack from '../drum/drumTrackFactory'

export default function initLiveApi() {
    const samplesFolder = this.patcher.filepath.slice(0, this.patcher.filepath.lastIndexOf('/')) + '/samples'
    const drumTrack = createDrumTrack(samplesFolder)
}

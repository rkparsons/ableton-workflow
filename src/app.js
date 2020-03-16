import { createLiveset } from './factories/livesetFactory'
import log from './util/log'

export default function init() {
    log('init')

    createLiveset(this.patcher.filepath)
}

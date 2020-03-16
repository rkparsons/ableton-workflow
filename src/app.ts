import { createLiveset } from './factories/livesetFactory'
import log from './util/log'

export default function init(this: any) {
    log('init')

    createLiveset(this.patcher.filepath)
}

import { createLiveset } from './factories/livesetFactory'
import log from './util/log'
import { testTs } from './constants/ascii.ts'

export default function init() {
    log('init')
    log(testTs('hello'))

    const liveset = createLiveset(this.patcher.filepath)
}

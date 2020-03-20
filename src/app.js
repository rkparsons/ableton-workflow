/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'
import log from '~/util/log'

let isInitialised = false

log('Compiled!')

export default function init() {
    if (!isInitialised) {
        createLiveset(this.patcher.filepath)
        isInitialised = true
        log('Initialised!')
    }
}

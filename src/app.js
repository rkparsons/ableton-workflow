/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'
import log from '~/util/log'

log('Compiling...')
log('Checking for LiveAPI...')

if (this) {
    outlet(0, 'bang')
}

export default function init() {
    log('Initialised!')

    createLiveset(this.patcher.filepath)
}

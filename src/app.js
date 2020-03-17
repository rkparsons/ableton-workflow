/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'
import log from '~/util/log'

log('Compiling...')
log('Checking for LiveAPI...')
outlet(0, 'bang')

export default function init() {
    log('init')

    createLiveset(this.patcher.filepath)
}

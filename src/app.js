/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'
import log from '~/util/log'

messnamed('init', 'bang')

export default function init() {
    createLiveset(this.patcher.filepath)
    log('Ready!')
}

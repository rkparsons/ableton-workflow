/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'

messnamed('init', 'bang')

export default function init() {
    createLiveset(this.patcher.filepath)
    messnamed('console', 'Ready!')
}

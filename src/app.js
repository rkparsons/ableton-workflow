/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'

let isInitialised = false
export default function init() {
    if (!isInitialised) {
        createLiveset(this.patcher.filepath)
        isInitialised = true
        outlet(0, 'Ready!')
    }
}

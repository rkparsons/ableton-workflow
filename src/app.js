/* eslint-disable */

import { createLiveset } from '~/factories/livesetFactory'

export default function init() {
    createLiveset(this.patcher.filepath)
}

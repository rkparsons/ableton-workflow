import { createLiveset } from '~/factories/livesetFactory'

messnamed('init', 'bang')

export default function init(this: any) {
    createLiveset(this.patcher.filepath)
    messnamed('console', 'Ready!')
}

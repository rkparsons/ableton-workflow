import { MalletPage } from '~/parameterPages/collision/malletPage'
import { MixerPage } from '~/parameterPages/collision/mixerPage'
import { NoiseEnvPage } from '~/parameterPages/collision/noiseEnvPage'
import { NoisePage } from '~/parameterPages/collision/noisePage'
import { Reso1aPage } from '~/parameterPages/collision/reso1aPage'
import { Reso1bPage } from '~/parameterPages/collision/reso1bPage'
import { Reso1cPage } from '~/parameterPages/collision/reso1cPage'

export default function (pathToChain: string, deviceIndex: number) {
    return [
        new MalletPage(0, pathToChain, deviceIndex),
        new NoisePage(1, pathToChain, deviceIndex),
        new NoiseEnvPage(2, pathToChain, deviceIndex),
        new MixerPage(3, pathToChain, deviceIndex),
        new Reso1aPage(4, pathToChain, deviceIndex),
        new Reso1bPage(5, pathToChain, deviceIndex),
        new Reso1cPage(6, pathToChain, deviceIndex),
    ]
}

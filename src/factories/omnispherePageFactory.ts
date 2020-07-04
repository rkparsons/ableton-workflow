import { FilterPage } from '~/parameterPages/omnisphere/filterPage'
import { SamplePage } from '~/parameterPages/omnisphere/samplePage'

export default function (chainName: string, pathToChain: string, deviceIndex: number) {
    return [new SamplePage(0, chainName, pathToChain, deviceIndex)]
}

import { FilterPage } from '~/parameterPages/omnisphere/filterPage'
import { SamplePage } from '~/parameterPages/omnisphere/samplePage'

export default function (pathToChain: string, deviceIndex: number) {
    return [new SamplePage(0, pathToChain, deviceIndex), new FilterPage(1, pathToChain, deviceIndex)]
}

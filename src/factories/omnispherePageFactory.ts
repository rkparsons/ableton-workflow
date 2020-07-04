import { AMPage } from '~/parameterPages/omnisphere/amPage'
import { FMPage } from '~/parameterPages/omnisphere/fmPage'
import { FilterPage } from '~/parameterPages/omnisphere/filterPage'
import { SamplePage } from '~/parameterPages/omnisphere/samplePage'
import { WSPage } from '~/parameterPages/omnisphere/wsPage'

export default function (chainName: string, pathToChain: string, deviceIndex: number) {
    return [new SamplePage(0, chainName, pathToChain, deviceIndex), new FMPage(1, pathToChain, deviceIndex), new AMPage(2, pathToChain, deviceIndex), new WSPage(3, pathToChain, deviceIndex)]
}

import { OmnisphereUnisonDepth } from '~/parameters/omnisphere/unisonDepth'
import { OmnisphereUnisonOctave } from '~/parameters/omnisphere/unisonOctave'
import { OmnisphereUnisonOn } from '~/parameters/omnisphere/unisonOn'
import { OmnisphereUnisonSpread } from '~/parameters/omnisphere/unisonSpread'
import { ParameterPage } from '~/models/parameterPage'

export class UnisonPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereUnisonOn({ pathToChain, deviceIndex }),
            new OmnisphereUnisonDepth({ pathToChain, deviceIndex }),
            new OmnisphereUnisonSpread({ pathToChain, deviceIndex }),
            new OmnisphereUnisonOctave({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Unison', parameters)
    }
}

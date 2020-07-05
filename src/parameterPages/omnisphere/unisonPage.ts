import { OmnisphereUnisonDepth } from '~/parameters/omnisphere/unisonDepth'
import { OmnisphereUnisonDetune } from '~/parameters/omnisphere/unisonDetune'
import { OmnisphereUnisonOctave } from '~/parameters/omnisphere/unisonOctave'
import { OmnisphereUnisonOn } from '~/parameters/omnisphere/unisonOn'
import { OmnisphereUnisonRange } from '~/parameters/omnisphere/unisonRange'
import { OmnisphereUnisonSpread } from '~/parameters/omnisphere/unisonSpread'
import { ParameterPage } from '~/models/parameterPage'

export class UnisonPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereUnisonOn({ pathToChain, deviceIndex }),
            new OmnisphereUnisonDepth({ pathToChain, deviceIndex }),
            new OmnisphereUnisonSpread({ pathToChain, deviceIndex }),
            new OmnisphereUnisonOctave({ pathToChain, deviceIndex }),
            new OmnisphereUnisonDetune({ pathToChain, deviceIndex }),
            new OmnisphereUnisonRange({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Unison', parameters)
    }
}

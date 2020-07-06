import { OmnisphereGranulatorAlgo } from '~/parameters/omnisphere/granulatorAlgo'
import { OmnisphereGranulatorDirection } from '~/parameters/omnisphere/granulatorDirection'
import { OmnisphereGranulatorMode } from '~/parameters/omnisphere/granulatorMode'
import { OmnisphereGranulatorOn } from '~/parameters/omnisphere/granulatorOn'
import { OmnisphereGranulatorPitchMode } from '~/parameters/omnisphere/granulatorPitchMode'
import { OmnisphereGranulatorSlider } from '~/parameters/omnisphere/granulatorSlider'
import { ParameterPage } from '~/models/parameterPage'

export class GranulatorPage extends ParameterPage {
    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const parameters = [
            new OmnisphereGranulatorOn({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorMode({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorSlider({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorAlgo({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorDirection({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorPitchMode({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Grains', parameters)
    }
}

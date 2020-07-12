import { Blank } from '~/parameters/blank'
import { OmnisphereGranulatorAlgo } from '~/parameters/omnisphere/granulatorAlgo'
import { OmnisphereGranulatorDepth } from '~/parameters/omnisphere/granulatorDepth'
import { OmnisphereGranulatorDetune } from '~/parameters/omnisphere/granulatorDetune'
import { OmnisphereGranulatorDirection } from '~/parameters/omnisphere/granulatorDirection'
import { OmnisphereGranulatorGlide } from '~/parameters/omnisphere/granulatorGlide'
import { OmnisphereGranulatorIntensity } from '~/parameters/omnisphere/granulatorIntensity'
import { OmnisphereGranulatorInterval } from '~/parameters/omnisphere/granulatorInterval'
import { OmnisphereGranulatorMode } from '~/parameters/omnisphere/granulatorMode'
import { OmnisphereGranulatorOn } from '~/parameters/omnisphere/granulatorOn'
import { OmnisphereGranulatorPitch } from '~/parameters/omnisphere/granulatorPitch'
import { OmnisphereGranulatorPitchMode } from '~/parameters/omnisphere/granulatorPitchMode'
import { OmnisphereGranulatorSlider } from '~/parameters/omnisphere/granulatorSlider'
import { OmnisphereGranulatorSmoothing } from '~/parameters/omnisphere/granulatorSmoothing'
import { OmnisphereGranulatorSpread } from '~/parameters/omnisphere/granulatorSpread'
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
            new Blank(),
            new Blank(),
            new OmnisphereGranulatorDepth({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorIntensity({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorSmoothing({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorSpread({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorDetune({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorPitch({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorInterval({ pathToChain, deviceIndex }),
            new OmnisphereGranulatorGlide({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Grains', parameters)
    }
}

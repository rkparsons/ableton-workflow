import { CCDriveVelocity } from '~/parameters/cc/driveVelocity'
import { CCPitchEnvVelocity } from '~/parameters/cc/pitchEnvVelocity'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerAmpTimeVelocity } from '~/parameters/sampler/ampTimeVelocity'
import { SamplerFilterVelocity } from '~/parameters/sampler/filterVelocity'
import { SamplerOscVelocity } from '~/parameters/sampler/oscVelocity'
import { SamplerVolumeVelocity } from '~/parameters/sampler/volumeVelocity'

export class VelocityPage extends ParameterPage {
    constructor(pageIndex, pathToChain, deviceIndex) {
        const parameters = [
            new SamplerVolumeVelocity({ pathToChain, deviceIndex }),
            new SamplerOscVelocity({ pathToChain, deviceIndex }),
            new SamplerFilterVelocity({ pathToChain, deviceIndex }),
            new CCDriveVelocity({ pathToChain, deviceIndex }),
            new CCPitchEnvVelocity({ pathToChain, deviceIndex }),
            new SamplerAmpTimeVelocity({ pathToChain, deviceIndex }),
        ]

        super(pageIndex, 'Velo', parameters)
    }
}

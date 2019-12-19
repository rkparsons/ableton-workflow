import { CCDriveVelocity } from '../../parameters/cc/driveVelocity'
import { CCPitchEnvVelocity } from '../../parameters/cc/pitchEnvVelocity'
import { SamplerAmpTimeVelocity } from '../../parameters/sampler/ampTimeVelocity'
import { SamplerFilterVelocity } from '../../parameters/sampler/filterVelocity'
import { SamplerOscVelocity } from '../../parameters/sampler/oscVelocity'
import { SamplerVolumeVelocity } from '../../parameters/sampler/volumeVelocity'

export default {
    name: 'Velo',
    parameters: [SamplerVolumeVelocity, SamplerOscVelocity, SamplerFilterVelocity, CCDriveVelocity, CCPitchEnvVelocity, SamplerAmpTimeVelocity],
}

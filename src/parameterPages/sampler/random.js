import { CCStartRandom } from '../../parameters/cc/startRandom'
import { SamplerFilterLfo } from '../../parameters/sampler/filterLfo'
import { SamplerPanLfo } from '../../parameters/sampler/panLfo'
import { SamplerPitchLfo } from '../../parameters/sampler/pitchLfo'
import { SamplerVolumeLfo } from '../../parameters/sampler/volumeLfo'

export default {
    name: 'Rand',
    parameters: [SamplerVolumeLfo, SamplerPitchLfo, SamplerFilterLfo, SamplerPanLfo, CCStartRandom],
}

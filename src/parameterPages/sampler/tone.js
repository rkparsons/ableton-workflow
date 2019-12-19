import { SamplerFilterCircuit } from '../../parameters/sampler/filterCircuit'
import { SamplerFilterDrive } from '../../parameters/sampler/filterDrive'
import { SamplerFilterSlope } from '../../parameters/sampler/filterSlope'
import { SamplerShaperLevel } from '../../parameters/sampler/shaperLevel'
import { SamplerShaperPre } from '../../parameters/sampler/shaperPre'
import { SamplerShaperType } from '../../parameters/sampler/shaperType'

export default {
    name: 'Tone',
    parameters: [SamplerFilterCircuit, SamplerFilterSlope, SamplerFilterDrive, SamplerShaperPre, SamplerShaperType, SamplerShaperLevel],
}

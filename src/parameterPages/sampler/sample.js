import { CCStart } from '../../parameters/cc/start'
import { ChainSolo } from '../../parameters/chain/solo'
import { SamplerCategory } from '../../parameters/sampler/category'
import { SamplerRepitch } from '../../parameters/sampler/repitch'
import { SamplerReverse } from '../../parameters/sampler/reverse'
import { SamplerSelect } from '../../parameters/sampler/select'

export default {
    name: 'Sample',
    parameters: [SamplerCategory, SamplerSelect, CCStart, SamplerReverse, ChainSolo, SamplerRepitch],
}

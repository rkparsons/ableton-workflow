import { CCDriveVelocity } from '../parameters/cc/driveVelocity'
import { CCPitchEnvVelocity } from '../parameters/cc/pitchEnvVelocity'
import { CCStart } from '../parameters/cc/start'
import { CCStartRandom } from '../parameters/cc/startRandom'
import { ChainSolo } from '../parameters/chain/solo'
import { ParameterPage } from '../models/parameterPage'
import { SamplerAmpAttack } from '../parameters/sampler/ampAttack'
import { SamplerAmpDecay } from '../parameters/sampler/ampDecay'
import { SamplerAmpLoop } from '../parameters/sampler/ampLoop'
import { SamplerAmpRelease } from '../parameters/sampler/ampRelease'
import { SamplerAmpSustain } from '../parameters/sampler/ampSustain'
import { SamplerAmpSync } from '../parameters/sampler/ampSync'
import { SamplerAmpTimeVelocity } from '../parameters/sampler/ampTimeVelocity'
import { SamplerCategory } from '../parameters/sampler/category'
import { SamplerDetune } from '../parameters/sampler/detune'
import { SamplerFilterCircuit } from '../parameters/sampler/filterCircuit'
import { SamplerFilterDrive } from '../parameters/sampler/filterDrive'
import { SamplerFilterEnv } from '../parameters/sampler/filterEnv'
import { SamplerFilterEnvAttack } from '../parameters/sampler/filterEnvAttack'
import { SamplerFilterEnvDecay } from '../parameters/sampler/filterEnvDecay'
import { SamplerFilterFreq } from '../parameters/sampler/filterFreq'
import { SamplerFilterLfo } from '../parameters/sampler/filterLfo'
import { SamplerFilterRes } from '../parameters/sampler/filterRes'
import { SamplerFilterSlope } from '../parameters/sampler/filterSlope'
import { SamplerFilterType } from '../parameters/sampler/filterType'
import { SamplerFilterVelocity } from '../parameters/sampler/filterVelocity'
import { SamplerOscEnvAttack } from '../parameters/sampler/oscEnvAttack'
import { SamplerOscEnvDecay } from '../parameters/sampler/oscEnvDecay'
import { SamplerOscFreq } from '../parameters/sampler/oscFreq'
import { SamplerOscLevel } from '../parameters/sampler/oscLevel'
import { SamplerOscMulti } from '../parameters/sampler/oscMulti'
import { SamplerOscVelocity } from '../parameters/sampler/oscVelocity'
import { SamplerOscWave } from '../parameters/sampler/oscWave'
import { SamplerPanLfo } from '../parameters/sampler/panLfo'
import { SamplerPitch } from '../parameters/sampler/pitch'
import { SamplerPitchEnv } from '../parameters/sampler/pitchEnv'
import { SamplerPitchEnvAttack } from '../parameters/sampler/pitchEnvAttack'
import { SamplerPitchEnvDecay } from '../parameters/sampler/pitchEnvDecay'
import { SamplerPitchLfo } from '../parameters/sampler/pitchLfo'
import { SamplerRepitch } from '../parameters/sampler/repitch'
import { SamplerReverse } from '../parameters/sampler/reverse'
import { SamplerSelect } from '../parameters/sampler/select'
import { SamplerShaperLevel } from '../parameters/sampler/shaperLevel'
import { SamplerShaperPre } from '../parameters/sampler/shaperPre'
import { SamplerShaperType } from '../parameters/sampler/shaperType'
import { SamplerSpread } from '../parameters/sampler/spread'
import { SamplerVolumeLfo } from '../parameters/sampler/volumeLfo'
import { SamplerVolumeVelocity } from '../parameters/sampler/volumeVelocity'

export class Sampler {
    constructor(pathToChain, deviceIndex, categories, samples) {
        this.pathToChain = pathToChain
        this.deviceIndex = deviceIndex
        this.categories = categories
        this.samples = samples

        this.pages = [
            {
                name: 'Sample',
                parameters: [SamplerCategory, SamplerSelect, CCStart, SamplerReverse, ChainSolo, SamplerRepitch],
            },
            {
                name: 'Amp',
                parameters: [SamplerAmpAttack, SamplerAmpDecay, SamplerAmpSustain, SamplerAmpRelease, SamplerAmpLoop, SamplerAmpSync],
            },
            {
                name: 'Pitch',
                parameters: [SamplerPitch, SamplerDetune, SamplerSpread, SamplerPitchEnv, SamplerPitchEnvAttack, SamplerPitchEnvDecay],
            },
            {
                name: 'Filter',
                parameters: [SamplerFilterType, SamplerFilterFreq, SamplerFilterRes, SamplerFilterEnv, SamplerFilterEnvAttack, SamplerFilterEnvDecay],
            },
            {
                name: 'Tone',
                parameters: [SamplerFilterCircuit, SamplerFilterSlope, SamplerFilterDrive, SamplerShaperPre, SamplerShaperType, SamplerShaperLevel],
            },
            {
                name: 'Osc',
                parameters: [SamplerOscLevel, SamplerOscWave, SamplerOscFreq, SamplerOscMulti, SamplerOscEnvAttack, SamplerOscEnvDecay],
            },
            {
                name: 'Velo',
                parameters: [SamplerVolumeVelocity, SamplerOscVelocity, SamplerFilterVelocity, CCDriveVelocity, CCPitchEnvVelocity, SamplerAmpTimeVelocity],
            },
            {
                name: 'Rand',
                parameters: [SamplerVolumeLfo, SamplerPitchLfo, SamplerFilterLfo, SamplerPanLfo, CCStartRandom],
            },
        ]
    }

    getParameterPages() {
        return this.pages.map((page, index) => {
            const parameters = page.parameters.map(ParameterClass => new ParameterClass({ pathToChain: this.pathToChain, deviceIndex: this.deviceIndex, options: this.categories, optionGroups: this.samples }))

            return new ParameterPage(index, page.name, parameters)
        })
    }
}

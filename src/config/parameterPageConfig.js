import { CCDriveVelocity } from '../parameters/cc/driveVelocity'
import { CCPitchEnvVelocity } from '../parameters/cc/pitchEnvVelocity'
import { CCStart } from '../parameters/cc/start'
import { CCStartRandom } from '../parameters/cc/startRandom'
import { ChainSolo } from '../parameters/chain/solo'
import { MixerPanning } from '../parameters/mixer/panning'
import { MixerVolume } from '../parameters/mixer/volume'
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

export const parameterPageConfig = {
    Mixer: [MixerVolume, MixerPanning],

    Sampler: [
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
    ],

    // BreakSampler: [
    //     {
    //         name: 'Sample',
    //         parameters: [SamplerCategory', SamplerSelect', 'CC_Start', SamplerReverse', 'Chain_Solo', SamplerRepitch', 'Project_Tempo', null],
    //     },
    //     {
    //         name: 'Amp',
    //         parameters: [SamplerAmpAttack', SamplerAmpDecay', SamplerAmpSustain', SamplerAmpRelease', SamplerAmpLoop', SamplerAmpSync', null, null],
    //     },
    //     {
    //         name: 'Pitch',
    //         parameters: [SamplerPitch', SamplerDetune', SamplerSpread', SamplerPitchEnv', SamplerPitchEnvAttack', SamplerPitchEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Filter',
    //         parameters: [SamplerFilterType', SamplerFilterFreq', SamplerFilterRes', SamplerFilterEnv', SamplerFilterEnvAttack', SamplerFilterEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Tone',
    //         parameters: [SamplerFilterCircuit', SamplerFilterSlope', SamplerFilterDrive', SamplerShaperPre', SamplerShaperType', SamplerShaperLevel', null, null],
    //     },
    //     {
    //         name: 'Osc',
    //         parameters: [SamplerOscLevel', SamplerOscWave', SamplerOscFreq', SamplerOscMulti', SamplerOscEnvAttack', SamplerOscEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Velo',
    //         parameters: [SamplerVolumeVelocity', SamplerOscVelocity', SamplerFilterVelocity', 'CC_DriveVelocity', 'CC_PitchEnvVelocity', SamplerAmpTimeVelocity', null, null],
    //     },
    //     {
    //         name: 'Rand',
    //         parameters: [SamplerVolumeLfo', SamplerPitchLfo', null, SamplerFilterLfo', SamplerPanLfo', 'CC_StartRandom', null, null],
    //     },
    // ],

    // KickSynth: [
    //     {
    //         name: 'On',
    //         parameters: ['decay', 'pitch', 'env', 'drive', 'tone', 'solo', null, null],
    //     },
    //     {
    //         name: 'Trans',
    //         parameters: [null, null, null, null, 'attack', 'click', null, null],
    //     },
    // ],

    // SnareSynth: [
    //     {
    //         name: 'On',
    //         parameters: ['decay', 'tune', 'filter', 'tone', 'colour', 'solo', null, null],
    //     },
    // ],

    // Tension: [
    //     {
    //         name: 'String',
    //         parameters: ['string_decay', 'string_ratio', 'string_inharm', 'string_damping', 'string_octave', 'string_semi', 'string_error', null],
    //     },
    //     {
    //         name: 'Excitor',
    //         parameters: ['excitor_type', 'excitor_protusion', 'excitor_stiffness', 'excitor_speed', 'excitor_position', 'excitor_damping', null, null],
    //     },
    //     {
    //         name: 'Damper',
    //         parameters: ['damper_on', 'damper_damping', 'damper_mass', 'damper_stiffness', 'damper_position', null, null, null],
    //     },
    //     {
    //         name: 'Finger',
    //         parameters: ['finger_on', 'finger_mass', 'finger_stiffness', 'fret_stiffness', null, null, null, null],
    //     },
    //     {
    //         name: 'Pickup',
    //         parameters: ['pickup_on', 'pickup_position', null, null, null, null, null, null],
    //     },
    //     {
    //         name: 'Body',
    //         parameters: ['body_on', 'body_type', 'body_size', 'body_decay', 'body_lowcut', 'body_highcut', 'body_balance', null],
    //     },
    //     {
    //         name: 'Velocity',
    //         parameters: [null, 'velocity_protusion', 'velocity_stiffness', 'velocity_speed', 'velocity_position', 'velocity_damper', 'velocity_finger', null],
    //     },
    // ],

    // Collision: [
    //     {
    //         name: 'Mallet',
    //         parameters: ['mallet_volume', 'mallet_volume_vel', 'mallet_stiffness', 'mallet_stiffness_vel', 'mallet_noise', 'mallet_noise_vel', 'mallet_colour', null],
    //     },
    //     {
    //         name: 'Noise',
    //         parameters: ['noise_on', 'noise_volume', 'filter_type', 'filter_freq', 'filter_res', null, null, null],
    //     },
    //     {
    //         name: 'Env',
    //         parameters: ['env_freq', 'noise_volume', null, 'env_attack', 'env_decay', 'env_sustain', 'env_release', null],
    //     },
    //     {
    //         name: 'Mixer',
    //         parameters: ['structure', 'reso1_on', 'reso1_volume', 'reso1_quality', 'reso2_on', 'reso2_volume', 'reso2_quality', null],
    //     },
    //     {
    //         name: 'Reso1',
    //         parameters: ['reso1_type', 'reso1_decay', 'reso1_material', 'reso1_ratio', 'reso1_brightness', 'reso1_inharmonics', 'reso1_position', null],
    //     },
    //     {
    //         name: 'Reso1.',
    //         parameters: ['reso1_type', 'reso1_decay', 'reso1_radius', 'reso1_opening', null, null, null, null],
    //     },
    //     {
    //         name: 'Reso1..',
    //         parameters: ['reso1_type', 'reso1_decay', 'reso1_tune', 'reso1_fine', 'reso1_env', 'reso1_time', null, null],
    //     },
    //     {
    //         name: 'Reso2',
    //         parameters: ['reso2_type', 'reso2_decay', 'reso2_material', 'reso2_ratio', 'reso2_brightness', 'reso2_inharmonics', 'reso2_position', null],
    //     },
    //     {
    //         name: 'Reso2.',
    //         parameters: ['reso2_type', 'reso2_decay', 'reso2_radius', 'reso2_opening', null, null, null, null],
    //     },
    //     {
    //         name: 'Reso2..',
    //         parameters: ['reso2_type', 'reso2_decay', 'reso2_tune', 'reso2_fine', 'reso2_env', 'reso2_time', null, null],
    //     },
    //     {
    //         name: 'LFO1',
    //         parameters: ['lfo1_shape', 'lfo1_retrig', 'lfo1_rate', 'lfo1_dest_a', 'lfo1_amount_a', 'lfo1_dest_b', 'lfo1_amount_b', null],
    //     },
    //     {
    //         name: 'LFO2',
    //         parameters: ['lfo2_shape', 'lfo2_retrig', 'lfo2_rate', 'lfo2_dest_a', 'lfo2_amount_a', 'lfo2_dest_b', 'lfo2_amount_b', null],
    //     },
    // ],
}

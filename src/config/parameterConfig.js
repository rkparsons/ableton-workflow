import { CCDriveVelocity } from '../parameters/cc/driveVelocity'
import { CCPitchEnvVelocity } from '../parameters/cc/pitchEnvVelocity'
import { CCStart } from '../parameters/cc/start'
import { CCStartRandom } from '../parameters/cc/startRandom'
import { ChainMute } from '../parameters/chain/mute'
import { ChainSolo } from '../parameters/chain/solo'
import { MixerPanning } from '../parameters/mixer/panning'
import { MixerVolume } from '../parameters/mixer/volume'
import { ProjectTempo } from '../parameters/project/tempo'
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

// todo: remove name property
// todo: inherit from original parameter class and move creation logic here
export const parameterConfig = {
    Project: {
        Tempo: () => new ProjectTempo(),
    },

    Mixer: {
        Volume: pathToChain => new MixerVolume(pathToChain),
        Panning: pathToChain => new MixerPanning(pathToChain),
    },

    Chain: {
        Mute: pathToChain => new ChainMute(pathToChain),
        Solo: pathToChain => new ChainSolo(pathToChain),
    },

    CC: {
        Start: (pathToChain, deviceTypeToIndex) => new CCStart(pathToChain, deviceTypeToIndex),
        StartRandom: (pathToChain, deviceTypeToIndex) => new CCStartRandom(pathToChain, deviceTypeToIndex),
        DriveVelocity: (pathToChain, deviceTypeToIndex) => new CCDriveVelocity(pathToChain, deviceTypeToIndex),
        PitchEnvVelocity: (pathToChain, deviceTypeToIndex) => new CCPitchEnvVelocity(pathToChain, deviceTypeToIndex),
    },

    Sampler: {
        Category: (pathToChain, deviceTypeToIndex) => new SamplerCategory(pathToChain, deviceTypeToIndex),
        Select: (pathToChain, deviceTypeToIndex) => new SamplerSelect(pathToChain, deviceTypeToIndex),
        Reverse: (pathToChain, deviceTypeToIndex) => new SamplerReverse(pathToChain, deviceTypeToIndex),
        OscWave: (pathToChain, deviceTypeToIndex) => new SamplerOscWave(pathToChain, deviceTypeToIndex),
        OscLevel: (pathToChain, deviceTypeToIndex) => new SamplerOscLevel(pathToChain, deviceTypeToIndex),
        OscVelocity: (pathToChain, deviceTypeToIndex) => new SamplerOscVelocity(pathToChain, deviceTypeToIndex),
        OscFreq: (pathToChain, deviceTypeToIndex) => new SamplerOscFreq(pathToChain, deviceTypeToIndex),
        OscMulti: (pathToChain, deviceTypeToIndex) => new SamplerOscMulti(pathToChain, deviceTypeToIndex),
        OscEnvAttack: (pathToChain, deviceTypeToIndex) => new SamplerOscEnvAttack(pathToChain, deviceTypeToIndex),
        OscEnvDecay: (pathToChain, deviceTypeToIndex) => new SamplerOscEnvDecay(pathToChain, deviceTypeToIndex),
        Spread: (pathToChain, deviceTypeToIndex) => new SamplerSpread(pathToChain, deviceTypeToIndex),
        Pitch: (pathToChain, deviceTypeToIndex) => new SamplerPitch(pathToChain, deviceTypeToIndex),
        Repitch: (pathToChain, deviceTypeToIndex) => new SamplerRepitch(pathToChain, deviceTypeToIndex),
        Detune: (pathToChain, deviceTypeToIndex) => new SamplerDetune(pathToChain, deviceTypeToIndex),
        PitchLfo: (pathToChain, deviceTypeToIndex) => new SamplerPitchLfo(pathToChain, deviceTypeToIndex),
        PitchEnv: (pathToChain, deviceTypeToIndex) => new SamplerPitchEnv(pathToChain, deviceTypeToIndex),
        PitchEnvAttack: (pathToChain, deviceTypeToIndex) => new SamplerPitchEnvAttack(pathToChain, deviceTypeToIndex),
        PitchEnvDecay: (pathToChain, deviceTypeToIndex) => new SamplerPitchEnvDecay(pathToChain, deviceTypeToIndex),
        VolumeVelocity: (pathToChain, deviceTypeToIndex) => new SamplerVolumeVelocity(pathToChain, deviceTypeToIndex),
        VolumeLfo: (pathToChain, deviceTypeToIndex) => new SamplerVolumeLfo(pathToChain, deviceTypeToIndex),
        PanLfo: (pathToChain, deviceTypeToIndex) => new SamplerPanLfo(pathToChain, deviceTypeToIndex),
        AmpAttack: (pathToChain, deviceTypeToIndex) => new SamplerAmpAttack(pathToChain, deviceTypeToIndex),
        AmpDecay: (pathToChain, deviceTypeToIndex) => new SamplerAmpDecay(pathToChain, deviceTypeToIndex),
        AmpSustain: (pathToChain, deviceTypeToIndex) => new SamplerAmpSustain(pathToChain, deviceTypeToIndex),
        AmpRelease: (pathToChain, deviceTypeToIndex) => new SamplerAmpRelease(pathToChain, deviceTypeToIndex),
        AmpLoop: (pathToChain, deviceTypeToIndex) => new SamplerAmpLoop(pathToChain, deviceTypeToIndex),
        AmpSync: (pathToChain, deviceTypeToIndex) => new SamplerAmpSync(pathToChain, deviceTypeToIndex),
        AmpTimeVelocity: (pathToChain, deviceTypeToIndex) => new SamplerAmpTimeVelocity(pathToChain, deviceTypeToIndex),
        FilterType: (pathToChain, deviceTypeToIndex) => new SamplerFilterType(pathToChain, deviceTypeToIndex),
        FilterCircuit: (pathToChain, deviceTypeToIndex) => new SamplerFilterCircuit(pathToChain, deviceTypeToIndex),
        FilterSlope: (pathToChain, deviceTypeToIndex) => new SamplerFilterSlope(pathToChain, deviceTypeToIndex),
        FilterFreq: (pathToChain, deviceTypeToIndex) => new SamplerFilterFreq(pathToChain, deviceTypeToIndex),
        FilterRes: (pathToChain, deviceTypeToIndex) => new SamplerFilterRes(pathToChain, deviceTypeToIndex),
        FilterDrive: (pathToChain, deviceTypeToIndex) => new SamplerFilterDrive(pathToChain, deviceTypeToIndex),
        FilterEnv: (pathToChain, deviceTypeToIndex) => new SamplerFilterEnv(pathToChain, deviceTypeToIndex),
        FilterEnvAttack: (pathToChain, deviceTypeToIndex) => new SamplerFilterEnvAttack(pathToChain, deviceTypeToIndex),
        FilterEnvDecay: (pathToChain, deviceTypeToIndex) => new SamplerFilterEnvDecay(pathToChain, deviceTypeToIndex),
        FilterVelocity: (pathToChain, deviceTypeToIndex) => new SamplerFilterVelocity(pathToChain, deviceTypeToIndex),
        FilterLfo: (pathToChain, deviceTypeToIndex) => new SamplerFilterLfo(pathToChain, deviceTypeToIndex),
        ShaperType: (pathToChain, deviceTypeToIndex) => new SamplerShaperType(pathToChain, deviceTypeToIndex),
        ShaperLevel: (pathToChain, deviceTypeToIndex) => new SamplerShaperLevel(pathToChain, deviceTypeToIndex),
        ShaperPre: (pathToChain, deviceTypeToIndex) => new SamplerShaperPre(pathToChain, deviceTypeToIndex),
    },

    // // synth kick
    // exports.xxx = {
    //     name: 'decay',
    //     displayName: 'Decay',
    //     path: 'parameters 1',
    //     inputRange: [0, 100],
    //     exponent: 0.8,
    //
    // }
    // exports.xxx = {
    //     name: 'pitch',
    //     displayName: 'Pitch',
    //     path: 'parameters 2',
    //     inputRange: [30, 200],
    //     exponent: 3.333,
    //
    // }
    // exports.xxx = {
    //     name: 'env',
    //     displayName: 'Env',
    //     path: 'parameters 3',
    //     inputRange: [0, 100],
    //     exponent: 0.8,
    //
    // }
    // exports.xxx = {
    //     name: 'attack',
    //     displayName: 'Attack',
    //     path: 'parameters 4',
    //     inputRange: [0, 100],
    //
    // }
    // exports.xxx = {
    //     name: 'click',
    //     displayName: 'Click',
    //     path: 'parameters 5',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'drive',
    //     displayName: 'Drive',
    //     path: 'parameters 6',
    //     inputRange: [0, 100],
    //
    // }
    // exports.xxx = {
    //     name: 'tone',
    //     displayName: 'Tone',
    //     path: 'parameters 7',
    //     inputRange: [0, 100],
    //
    // }

    // // synth snare
    // exports.xxx = {
    //     name: 'decay',
    //     displayName: 'Decay',
    //     path: 'parameters 1',
    //     inputRange: [0, 100],
    //
    // }
    // exports.xxx = {
    //     name: 'tune',
    //     displayName: 'Tune',
    //     path: 'parameters 2',
    //     inputRange: [0, 100],
    //
    // }
    // exports.xxx = {
    //     name: 'filter',
    //     displayName: 'Filter',
    //     path: 'parameters 3',
    //     inputRange: ['LP -\\', 'HP /-', 'BP /\\'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'tone',
    //     displayName: 'Tone',
    //     path: 'parameters 4',
    //     inputRange: [0, 100],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'colour',
    //     displayName: 'Colour',
    //     path: 'parameters 5',
    //     inputRange: [0, 100],
    //     unitType: unitType.INT,
    // }

    // // tension
    // exports.xxx = {
    //     name: 'string_decay',
    //     displayName: 'Decay',
    //     path: 'parameters 57',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_ratio',
    //     displayName: 'Ratio',
    //     path: 'parameters 59',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_inharm',
    //     displayName: 'Inharm',
    //     path: 'parameters 60',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_damping',
    //     displayName: 'Damping',
    //     path: 'parameters 55',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_octave',
    //     displayName: 'Octave',
    //     path: 'parameters 3',
    //     inputRange: [-3, 3],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_semi',
    //     displayName: 'Semi',
    //     path: 'parameters 4',
    //     inputRange: [-12, 12],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'string_error',
    //     displayName: 'Error',
    //     path: 'parameters 12',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'excitor_type',
    //     displayName: 'Type',
    //     path: 'parameters 33',
    //     inputRange: ['bow', 'hammer', 'bouncing', 'plectrum'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'excitor_protusion',
    //     displayName: 'Force',
    //     path: 'parameters 34',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'excitor_stiffness',
    //     displayName: 'Stiffnes',
    //     path: 'parameters 37',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'excitor_speed',
    //     displayName: 'Speed',
    //     path: 'parameters 40',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'excitor_position',
    //     displayName: 'Position',
    //     path: 'parameters 24',
    //     inputRange: [0, 50],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'excitor_damping',
    //     displayName: 'Damping',
    //     path: 'parameters 43',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'damper_on',
    //     displayName: 'I/O',
    //     path: 'parameters 46',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'damper_mass',
    //     displayName: 'Mass',
    //     path: 'parameters 47',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'damper_stiffness',
    //     displayName: 'Stiffnes',
    //     path: 'parameters 49',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'damper_position',
    //     displayName: 'Position',
    //     path: 'parameters 28',
    //     inputRange: [0, 50],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'damper_damping',
    //     displayName: 'Damping',
    //     path: 'parameters 53',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'finger_on',
    //     displayName: 'I/O',
    //     path: 'parameters 61',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'finger_mass',
    //     displayName: 'Mass',
    //     path: 'parameters 63',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'finger_stiffness',
    //     displayName: 'Stiffnes',
    //     path: 'parameters 62',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'fret_stiffness',
    //     displayName: 'Fret',
    //     path: 'parameters 66',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'pickup_on',
    //     displayName: 'I/O',
    //     path: 'parameters 44',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'pickup_position',
    //     displayName: 'Position',
    //     path: 'parameters 45',
    //     inputRange: [0, 50],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'body_on',
    //     displayName: 'I/O',
    //     path: 'parameters 91',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'body_type',
    //     displayName: 'Type',
    //     path: 'parameters 92',
    //     inputRange: ['piano', 'guitar', 'violin', 'generic'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'body_size',
    //     displayName: 'Size',
    //     path: 'parameters 93',
    //     inputRange: ['xs', 's', 'm', 'l', 'xl'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'body_decay',
    //     displayName: 'Decay',
    //     path: 'parameters 94',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'body_lowcut',
    //     displayName: 'Lowcut',
    //     path: 'parameters 95',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'body_highcut',
    //     displayName: 'Highcut',
    //     path: 'parameters 96',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'body_balance',
    //     displayName: 'Str/Body',
    //     path: 'parameters 98',
    //     inputRange: [-100, 100],
    //     outputRange: ['0', '1.'],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'velocity_protusion',
    //     displayName: 'Force',
    //     path: 'parameters 36',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'velocity_stiffness',
    //     displayName: 'Stiffnes',
    //     path: 'parameters 39',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'velocity_speed',
    //     displayName: 'Speed',
    //     path: 'parameters 42',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'velocity_position',
    //     displayName: 'Position',
    //     path: 'parameters 27',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'velocity_damper',
    //     displayName: 'Damper',
    //     path: 'parameters 31',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'velocity_finger',
    //     displayName: 'Finger',
    //     path: 'parameters 65',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }

    // // collision
    // exports.xxx = {
    //     name: 'structure',
    //     displayName: 'Routing',
    //     path: 'devices 0 parameters 1',
    //     inputRange: ['1 > 2', '1 + 2'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'mallet_on',
    //     displayName: 'I/O',
    //     path: 'devices 0 parameters 6',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'mallet_volume',
    //     displayName: 'Volume',
    //     path: 'devices 0 parameters 7',
    //     inputRange: [-60, 0],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_volume_vel',
    //     displayName: '< vel',
    //     path: 'devices 0 parameters 8',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_stiffness',
    //     displayName: 'Stiffnes',
    //     path: 'devices 0 parameters 10',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_stiffness_vel',
    //     displayName: '< vel',
    //     path: 'devices 0 parameters 11',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_noise',
    //     displayName: 'Noise',
    //     path: 'devices 0 parameters 13',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_noise_vel',
    //     displayName: '< vel',
    //     path: 'devices 0 parameters 14',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'mallet_colour',
    //     displayName: 'Colour',
    //     path: 'devices 0 parameters 16',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'noise_on',
    //     displayName: 'I/O',
    //     path: 'devices 0 parameters 17',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'noise_volume',
    //     displayName: 'Volume',
    //     path: 'devices 0 parameters 18',
    //     inputRange: [-60, 0],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'filter_type',
    //     displayName: 'Filter',
    //     path: 'devices 0 parameters 21',
    //     inputRange: ['lp -\\', 'hp /-', 'bp /\\', 'lhp /-\\'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'filter_freq',
    //     displayName: 'Freq',
    //     path: 'devices 0 parameters 22',
    //
    //
    // }
    // exports.xxx = {
    //     name: 'filter_res',
    //     displayName: 'Res',
    //     path: 'devices 0 parameters 26',
    //
    //
    // }
    // exports.xxx = {
    //     name: 'env_freq',
    //     displayName: 'Freq <',
    //     path: 'devices 0 parameters 25',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'env_attack',
    //     displayName: 'A /',
    //     path: 'devices 0 parameters 27',
    //
    //
    // }
    // exports.xxx = {
    //     name: 'env_decay',
    //     displayName: 'D \\',
    //     path: 'devices 0 parameters 28',
    //
    //
    // }
    // exports.xxx = {
    //     name: 'env_sustain',
    //     displayName: 'S --',
    //     path: 'devices 0 parameters 29',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'env_release',
    //     displayName: 'R \\',
    //     path: 'devices 0 parameters 30',
    //
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_on',
    //     displayName: 'Reso1',
    //     path: 'devices 0 parameters 31',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso1_type',
    //     displayName: 'Type',
    //     path: 'devices 0 parameters 32',
    //     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso1_quality',
    //     displayName: 'Quality',
    //     path: 'devices 0 parameters 33',
    //     inputRange: ['basic', 'few', 'medium', 'full'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso1_decay',
    //     displayName: 'Decay',
    //     path: 'devices 0 parameters 40',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_material',
    //     displayName: 'Material',
    //     path: 'devices 0 parameters 44',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_ratio',
    //     displayName: 'Ratio',
    //     path: 'devices 0 parameters 50',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_brightness',
    //     displayName: 'Bright',
    //     path: 'devices 0 parameters 51',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_inharmonics',
    //     displayName: 'Inharm',
    //     path: 'devices 0 parameters 53',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_position',
    //     displayName: 'Position',
    //     path: 'devices 0 parameters 57',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_volume',
    //     displayName: 'Volume',
    //     path: 'devices 0 parameters 63',
    //
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_radius',
    //     displayName: 'Radius',
    //     path: 'devices 0 parameters 47',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_opening',
    //     displayName: 'Opening',
    //     path: 'devices 0 parameters 55',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_tune',
    //     displayName: 'Tune',
    //     path: 'devices 0 parameters 34',
    //     inputRange: [-48, 48],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'reso1_fine',
    //     displayName: '+ / -',
    //     path: 'devices 0 parameters 35',
    //     inputRange: [-50, 50],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'reso1_env',
    //     displayName: '< Env',
    //     path: 'devices 0 parameters 37',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso1_time',
    //     displayName: '< Time',
    //     path: 'devices 0 parameters 39',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_on',
    //     displayName: 'Reso2',
    //     path: 'devices 0 parameters 64',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso2_type',
    //     displayName: 'Type',
    //     path: 'devices 0 parameters 65',
    //     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso2_quality',
    //     displayName: 'Quality',
    //     path: 'devices 0 parameters 66',
    //     inputRange: ['basic', 'few', 'medium', 'full'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'reso2_decay',
    //     displayName: 'Decay',
    //     path: 'devices 0 parameters 73',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_material',
    //     displayName: 'Material',
    //     path: 'devices 0 parameters 77',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_ratio',
    //     displayName: 'Ratio',
    //     path: 'devices 0 parameters 83',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_brightness',
    //     displayName: 'Bright',
    //     path: 'devices 0 parameters 84',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_inharmonics',
    //     displayName: 'Inharm',
    //     path: 'devices 0 parameters 86',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_position',
    //     displayName: 'Position',
    //     path: 'devices 0 parameters 90',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_volume',
    //     displayName: 'Volume',
    //     path: 'devices 0 parameters 96',
    //
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_radius',
    //     displayName: 'Radius',
    //     path: 'devices 0 parameters 80',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_opening',
    //     displayName: 'Opening',
    //     path: 'devices 0 parameters 88',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_tune',
    //     displayName: 'Tune',
    //     path: 'devices 0 parameters 67',
    //     inputRange: [-48, 48],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'reso2_fine',
    //     displayName: '+ / -',
    //     path: 'devices 0 parameters 68',
    //     inputRange: [-50, 50],
    //     unitType: unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'reso2_env',
    //     displayName: '< Env',
    //     path: 'devices 0 parameters 70',
    //     inputRange: [-100, 100],
    //     outputRange: ['-1.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'reso2_time',
    //     displayName: '< Time',
    //     path: 'devices 0 parameters 72',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo1_shape',
    //     displayName: 'Shape',
    //     path: 'devices 0 parameters 98',
    //     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo1_retrig',
    //     displayName: 'Retrig',
    //     path: 'devices 0 parameters 99',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo1_depth',
    //     displayName: 'Depth',
    //     path: 'devices 0 parameters 105',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo1_rate',
    //     displayName: 'Rate',
    //     path: 'devices 0 parameters 101',
    //
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo1_dest_a',
    //     displayName: 'Dest A',
    //     path: 'devices 0 parameters 107',
    //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo1_amount_a',
    //     path: 'devices 0 parameters 108',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo1_dest_b',
    //     displayName: 'Dest B',
    //     path: 'devices 0 parameters 109',
    //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo1_amount_b',
    //     path: 'devices 0 parameters 110',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo2_shape',
    //     displayName: 'Shape',
    //     path: 'devices 0 parameters 112',
    //     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo2_retrig',
    //     displayName: 'Retrig',
    //     path: 'devices 0 parameters 113',
    //     inputRange: ['off', 'on'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo2_depth',
    //     displayName: 'Depth',
    //     path: 'devices 0 parameters 119',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo2_rate',
    //     displayName: 'Rate',
    //     path: 'devices 0 parameters 115',
    //
    //     outputRange: ['0.', '1.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo2_dest_a',
    //     displayName: 'Dest A',
    //     path: 'devices 0 parameters 121',
    //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo2_amount_a',
    //     path: 'devices 0 parameters 122',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
    // exports.xxx = {
    //     name: 'lfo2_dest_b',
    //     displayName: 'Dest B',
    //     path: 'devices 0 parameters 123',
    //     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
    //     unitType: unitType.ENUM,
    // }
    // exports.xxx = {
    //     name: 'lfo2_amount_b',
    //     path: 'devices 0 parameters 124',
    //     inputRange: [-20, 20],
    //     outputRange: ['-5.', '5.'],
    //
    // }
}

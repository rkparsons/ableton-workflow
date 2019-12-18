import { parameterConfig } from '../factories/parameterConfig'

const { CC, Chain, Sampler } = parameterConfig

export const parameterPageConfig = {
    Sampler: [
        {
            name: 'Sample',
            parameters: [Sampler.Category, Sampler.Select, CC.Start, Sampler.Reverse, Chain.Solo, Sampler.Repitch],
        },
        {
            name: 'Amp',
            parameters: [Sampler.AmpAttack, Sampler.AmpDecay, Sampler.AmpSustain, Sampler.AmpRelease, Sampler.AmpLoop, Sampler.AmpSync],
        },
        {
            name: 'Pitch',
            parameters: [Sampler.Pitch, Sampler.Detune, Sampler.Spread, Sampler.PitchEnv, Sampler.PitchEnvAttack, Sampler.PitchEnvDecay],
        },
        {
            name: 'Filter',
            parameters: [Sampler.FilterType, Sampler.FilterFreq, Sampler.FilterRes, Sampler.FilterEnv, Sampler.FilterEnvAttack, Sampler.FilterEnvDecay],
        },
        {
            name: 'Tone',
            parameters: [Sampler.FilterCircuit, Sampler.FilterSlope, Sampler.FilterDrive, Sampler.ShaperPre, Sampler.ShaperType, Sampler.ShaperLevel],
        },
        {
            name: 'Osc',
            parameters: [Sampler.OscLevel, Sampler.OscWave, Sampler.OscFreq, Sampler.OscMulti, Sampler.OscEnvAttack, Sampler.OscEnvDecay],
        },
        {
            name: 'Velo',
            parameters: [Sampler.VolumeVelocity, Sampler.OscVelocity, Sampler.FilterVelocity, CC.DriveVelocity, CC.PitchEnvVelocity, Sampler.AmpTimeVelocity],
        },
        {
            name: 'Rand',
            parameters: [Sampler.VolumeLfo, Sampler.PitchLfo, Sampler.FilterLfo, Sampler.PanLfo, CC.StartRandom],
        },
    ],

    // BreakSampler: [
    //     {
    //         name: 'Sample',
    //         parameters: [Sampler.Category', Sampler.Select', 'CC_Start', Sampler.Reverse', 'Chain_Solo', Sampler.Repitch', 'Project_Tempo', null],
    //     },
    //     {
    //         name: 'Amp',
    //         parameters: [Sampler.AmpAttack', Sampler.AmpDecay', Sampler.AmpSustain', Sampler.AmpRelease', Sampler.AmpLoop', Sampler.AmpSync', null, null],
    //     },
    //     {
    //         name: 'Pitch',
    //         parameters: [Sampler.Pitch', Sampler.Detune', Sampler.Spread', Sampler.PitchEnv', Sampler.PitchEnvAttack', Sampler.PitchEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Filter',
    //         parameters: [Sampler.FilterType', Sampler.FilterFreq', Sampler.FilterRes', Sampler.FilterEnv', Sampler.FilterEnvAttack', Sampler.FilterEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Tone',
    //         parameters: [Sampler.FilterCircuit', Sampler.FilterSlope', Sampler.FilterDrive', Sampler.ShaperPre', Sampler.ShaperType', Sampler.ShaperLevel', null, null],
    //     },
    //     {
    //         name: 'Osc',
    //         parameters: [Sampler.OscLevel', Sampler.OscWave', Sampler.OscFreq', Sampler.OscMulti', Sampler.OscEnvAttack', Sampler.OscEnvDecay', null, null],
    //     },
    //     {
    //         name: 'Velo',
    //         parameters: [Sampler.VolumeVelocity', Sampler.OscVelocity', Sampler.FilterVelocity', 'CC_DriveVelocity', 'CC_PitchEnvVelocity', Sampler.AmpTimeVelocity', null, null],
    //     },
    //     {
    //         name: 'Rand',
    //         parameters: [Sampler.VolumeLfo', Sampler.PitchLfo', null, Sampler.FilterLfo', Sampler.PanLfo', 'CC_StartRandom', null, null],
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

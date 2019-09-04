exports.sampler = [
    {
        name: constants.offPageName,
        macros: [null, null, null, null, null, null, null, null],
    },
    {
        name: 'Sample',
        macros: [constants.sampleTypeName, constants.chainSelectName, 'delay', 'start', 'reverse', 'solo', null, null],
    },
    {
        name: 'Amp',
        macros: ['amp_attack', 'amp_decay', 'amp_sustain', 'amp_release', 'amp_loop', 'amp_sync', null, null],
    },
    {
        name: 'Pitch',
        macros: ['pitch', 'detune', 'spread', 'pitch_env', 'pitch_attack', 'pitch_decay', null, null],
    },
    {
        name: 'Filter',
        macros: ['f_type', 'f_freq', 'f_res', 'f_env', 'f_attack', 'f_decay', null, null],
    },
    {
        name: 'Tone',
        macros: ['f_circuit', 'f_slope', 'f_drive', 's_pre', 's_type', 's_level', null, null],
    },
    {
        name: 'Osc',
        macros: ['o_level', 'o_wave', 'o_freq', 'o_multi', 'o_attack', 'o_decay', null, null],
    },
    {
        name: 'Velo',
        macros: ['vol_velo', 'o_velo', 'f_velo', 'drive_velo', 'pe_velo', 'time_velo', null, null],
    },
    {
        name: 'Rand',
        macros: ['vol_lfo', 'pitch_lfo', null, 'f_lfo', 'pan_lfo', 'chain_rand', null, null],
    },
]

exports.synth_kick = [
    {
        name: constants.offPageName,
        macros: [null, null, null, null, null, null, null, null],
    },
    {
        name: 'On',
        macros: ['decay', 'pitch', 'env', 'drive', 'tone', 'solo', null, null],
    },
    {
        name: 'Trans',
        macros: [null, null, null, null, 'attack', 'click', null, null],
    },
]

exports.synth_snare = [
    {
        name: constants.offPageName,
        macros: [null, null, null, null, null, null, null, null],
    },
    {
        name: 'On',
        macros: ['decay', 'tune', 'filter', 'tone', 'colour', 'solo', null, null],
    },
]

exports.tension = [
    {
        name: constants.offPageName,
        macros: [null, null, null, null, null, null, null, null],
    },
    {
        name: 'String',
        macros: ['string_decay', 'string_ratio', 'string_inharm', 'string_damping', 'string_octave', 'string_semi', 'string_error', null],
    },
    {
        name: 'Excitor',
        macros: ['excitor_type', 'excitor_protusion', 'excitor_stiffness', 'excitor_speed', 'excitor_position', 'excitor_damping', null, null],
    },
    {
        name: 'Damper',
        macros: ['damper_on', 'damper_damping', 'damper_mass', 'damper_stiffness', 'damper_position', null, null, null],
    },
    {
        name: 'Finger',
        macros: ['finger_on', 'finger_mass', 'finger_stiffness', 'fret_stiffness', null, null, null, null],
    },
    {
        name: 'Pickup',
        macros: ['pickup_on', 'pickup_position', null, null, null, null, null, null],
    },
    {
        name: 'Body',
        macros: ['body_on', 'body_type', 'body_size', 'body_decay', 'body_lowcut', 'body_highcut', 'body_balance', null],
    },
    {
        name: 'Velocity',
        macros: [null, 'velocity_protusion', 'velocity_stiffness', 'velocity_speed', 'velocity_position', 'velocity_damper', 'velocity_finger', null],
    },
]

exports.collision = [
    {
        name: constants.offPageName,
        macros: [null, null, null, null, null, null, null, null],
    },
    {
        name: 'Mallet',
        macros: ['mallet_volume', 'mallet_volume_vel', 'mallet_stiffness', 'mallet_stiffness_vel', 'mallet_noise', 'mallet_noise_vel', 'mallet_colour', null],
    },
    {
        name: 'Noise',
        macros: ['noise_on', 'noise_volume', 'filter_type', 'filter_freq', 'filter_res', null, null, null],
    },
    {
        name: 'Env',
        macros: ['env_freq', 'noise_volume', null, 'env_attack', 'env_decay', 'env_sustain', 'env_release', null],
    },
    {
        name: 'Mixer',
        macros: ['structure', 'reso1_on', 'reso1_volume', 'reso1_quality', 'reso2_on', 'reso2_volume', 'reso2_quality', null],
    },
    {
        name: 'Reso1',
        macros: ['reso1_type', 'reso1_decay', 'reso1_material', 'reso1_ratio', 'reso1_brightness', 'reso1_inharmonics', 'reso1_position', null],
    },
    {
        name: 'Reso1.',
        macros: ['reso1_type', 'reso1_decay', 'reso1_radius', 'reso1_opening', null, null, null, null],
    },
    {
        name: 'Reso1..',
        macros: ['reso1_type', 'reso1_decay', 'reso1_tune', 'reso1_fine', 'reso1_env', 'reso1_time', null, null],
    },
    {
        name: 'Reso2',
        macros: ['reso2_type', 'reso2_decay', 'reso2_material', 'reso2_ratio', 'reso2_brightness', 'reso2_inharmonics', 'reso2_position', null],
    },
    {
        name: 'Reso2.',
        macros: ['reso2_type', 'reso2_decay', 'reso2_radius', 'reso2_opening', null, null, null, null],
    },
    {
        name: 'Reso2..',
        macros: ['reso2_type', 'reso2_decay', 'reso2_tune', 'reso2_fine', 'reso2_env', 'reso2_time', null, null],
    },
    {
        name: 'LFO1',
        macros: ['lfo1_shape', 'lfo1_retrig', 'lfo1_rate', 'lfo1_dest_a', 'lfo1_amount_a', 'lfo1_dest_b', 'lfo1_amount_b', null],
    },
    {
        name: 'LFO2',
        macros: ['lfo2_shape', 'lfo2_retrig', 'lfo2_rate', 'lfo2_dest_a', 'lfo2_amount_a', 'lfo2_dest_b', 'lfo2_amount_b', null],
    },
]

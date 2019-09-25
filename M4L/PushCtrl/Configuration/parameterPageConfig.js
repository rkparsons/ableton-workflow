exports.Sampler = [
    {
        name: 'Sample',
        parameters: ['Sampler_Category', 'Sampler_Select', 'CC_Delay', 'CC_Start', 'Sampler_Reverse', 'Layer_Solo', null, null],
    },
    {
        name: 'Amp',
        parameters: ['Sampler_AmpAttack', 'Sampler_AmpDecay', 'Sampler_AmpSustain', 'Sampler_AmpRelease', 'Sampler_AmpLoop', 'Sampler_AmpSync', null, null],
    },
    {
        name: 'Pitch',
        parameters: ['Sampler_Pitch', 'Sampler_Detune', 'Sampler_Spread', 'pitch_env', 'pitch_attack', 'pitch_decay', null, null],
    },
    {
        name: 'Filter',
        parameters: ['f_type', 'f_freq', 'f_res', 'f_env', 'f_attack', 'f_decay', null, null],
    },
    {
        name: 'Tone',
        parameters: ['f_circuit', 'f_slope', 'f_drive', 's_pre', 's_type', 's_level', null, null],
    },
    {
        name: 'Osc',
        parameters: ['o_level', 'o_wave', 'o_freq', 'o_multi', 'o_attack', 'o_decay', null, null],
    },
    {
        name: 'Velo',
        parameters: ['vol_velo', 'o_velo', 'f_velo', 'drive_velo', 'pe_velo', 'time_velo', null, null],
    },
    {
        name: 'Rand',
        parameters: ['vol_lfo', 'pitch_lfo', null, 'f_lfo', 'pan_lfo', 'chain_rand', null, null],
    },
]

exports.KickSynth = [
    {
        name: 'On',
        parameters: ['decay', 'pitch', 'env', 'drive', 'tone', 'solo', null, null],
    },
    {
        name: 'Trans',
        parameters: [null, null, null, null, 'attack', 'click', null, null],
    },
]

exports.SnareSynth = [
    {
        name: 'On',
        parameters: ['decay', 'tune', 'filter', 'tone', 'colour', 'solo', null, null],
    },
]

exports.Tension = [
    {
        name: 'String',
        parameters: ['string_decay', 'string_ratio', 'string_inharm', 'string_damping', 'string_octave', 'string_semi', 'string_error', null],
    },
    {
        name: 'Excitor',
        parameters: ['excitor_type', 'excitor_protusion', 'excitor_stiffness', 'excitor_speed', 'excitor_position', 'excitor_damping', null, null],
    },
    {
        name: 'Damper',
        parameters: ['damper_on', 'damper_damping', 'damper_mass', 'damper_stiffness', 'damper_position', null, null, null],
    },
    {
        name: 'Finger',
        parameters: ['finger_on', 'finger_mass', 'finger_stiffness', 'fret_stiffness', null, null, null, null],
    },
    {
        name: 'Pickup',
        parameters: ['pickup_on', 'pickup_position', null, null, null, null, null, null],
    },
    {
        name: 'Body',
        parameters: ['body_on', 'body_type', 'body_size', 'body_decay', 'body_lowcut', 'body_highcut', 'body_balance', null],
    },
    {
        name: 'Velocity',
        parameters: [null, 'velocity_protusion', 'velocity_stiffness', 'velocity_speed', 'velocity_position', 'velocity_damper', 'velocity_finger', null],
    },
]

exports.Collision = [
    {
        name: 'Mallet',
        parameters: ['mallet_volume', 'mallet_volume_vel', 'mallet_stiffness', 'mallet_stiffness_vel', 'mallet_noise', 'mallet_noise_vel', 'mallet_colour', null],
    },
    {
        name: 'Noise',
        parameters: ['noise_on', 'noise_volume', 'filter_type', 'filter_freq', 'filter_res', null, null, null],
    },
    {
        name: 'Env',
        parameters: ['env_freq', 'noise_volume', null, 'env_attack', 'env_decay', 'env_sustain', 'env_release', null],
    },
    {
        name: 'Mixer',
        parameters: ['structure', 'reso1_on', 'reso1_volume', 'reso1_quality', 'reso2_on', 'reso2_volume', 'reso2_quality', null],
    },
    {
        name: 'Reso1',
        parameters: ['reso1_type', 'reso1_decay', 'reso1_material', 'reso1_ratio', 'reso1_brightness', 'reso1_inharmonics', 'reso1_position', null],
    },
    {
        name: 'Reso1.',
        parameters: ['reso1_type', 'reso1_decay', 'reso1_radius', 'reso1_opening', null, null, null, null],
    },
    {
        name: 'Reso1..',
        parameters: ['reso1_type', 'reso1_decay', 'reso1_tune', 'reso1_fine', 'reso1_env', 'reso1_time', null, null],
    },
    {
        name: 'Reso2',
        parameters: ['reso2_type', 'reso2_decay', 'reso2_material', 'reso2_ratio', 'reso2_brightness', 'reso2_inharmonics', 'reso2_position', null],
    },
    {
        name: 'Reso2.',
        parameters: ['reso2_type', 'reso2_decay', 'reso2_radius', 'reso2_opening', null, null, null, null],
    },
    {
        name: 'Reso2..',
        parameters: ['reso2_type', 'reso2_decay', 'reso2_tune', 'reso2_fine', 'reso2_env', 'reso2_time', null, null],
    },
    {
        name: 'LFO1',
        parameters: ['lfo1_shape', 'lfo1_retrig', 'lfo1_rate', 'lfo1_dest_a', 'lfo1_amount_a', 'lfo1_dest_b', 'lfo1_amount_b', null],
    },
    {
        name: 'LFO2',
        parameters: ['lfo2_shape', 'lfo2_retrig', 'lfo2_rate', 'lfo2_dest_a', 'lfo2_amount_a', 'lfo2_dest_b', 'lfo2_amount_b', null],
    },
]

const constants = require('constants')

exports.Mixer = {
    Volume: {
        path: 'mixer_device volume',
        inputRange: [0, 1],
        defaultValue: 0.85,
        unitType: constants.unitType.FLOAT,
    },
    Panning: {
        path: 'mixer_device panning',
        inputRange: [-1, 1],
        unitType: constants.unitType.FLOAT,
    },
}

exports.Layer = {
    // exports.xxx = {
    //     name: constants.muteName,
    //     apiProperty: 'mute',
    //     path: '',
    //     inputRange: ['off', 'on'],
    //     unitType: constants.unitType.ENUM,
    // }
    Solo: {
        displayName: 'Solo',
        property: 'solo',
        path: '',
        options: ['off', 'on'],
        randomRange: [0, 0],
        unitType: constants.unitType.ENUM,
    },
}

exports.CC = {
    Delay: {
        displayName: 'Delay',
        path: 'parameters 1',
        inputRange: [0, 200],
        randomRange: [0, 0],
        unitType: constants.unitType.INT,
    },
    Start: {
        displayName: 'Start',
        path: 'parameters 2',
        inputRange: [0, 127],
        randomRange: [0, 0],
        unitType: constants.unitType.INT,
    },
    // exports.xxx = {
    //     name: 'chain_rand',
    //     displayName: 'Sample',
    //     path: 'devices 0 parameters 3',
    //     inputRange: [0, 127],
    //     unitType: constants.unitType.INT,
    // }
    // exports.xxx = {
    //     name: 'drive_velo',
    //     displayName: 'Drive',
    //     path: 'devices 0 parameters 4',
    //     inputRange: [0, 100],
    //     outputRange: [0, 127],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    // exports.xxx = {
    //     name: 'pe_velo',
    //     displayName: 'PEnv',
    //     path: 'devices 0 parameters 5',
    //     inputRange: [0, 100],
    //     outputRange: [0, 127],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
}

exports.Sampler = {
    Category: {
        displayName: 'Category',
        path: 'parameters 29',
        options: [],
        unitType: constants.unitType.ENUM,
    },
    Select: {
        displayName: 'Sample',
        path: 'parameters 3',
        options: [],
        unitType: constants.unitType.ENUM,
    },
    Reverse: {
        displayName: 'Playback',
        path: 'parameters 1',
        options: { 0: '>>>', 1: '<<<' },
        unitType: constants.unitType.ENUM,
        randomRange: [0, 0],
    },
    OscWave: {
        displayName: '/\\/',
        path: 'parameters 6',
        options: ['sin', 'sin 4bit', 'sin 8bit', 'saw 3', 'saw 4', 'saw 6', 'saw 8', 'saw 16', 'saw 32', 'saw 64', 'saw D', 'squ 3', 'squ 4', 'squ 6', 'squ 8', 'squ 16', 'squ 32', 'squ 64', 'squ D', 'tri', 'noise'],
        unitType: constants.unitType.ENUM,
    },
    OscLevel: {
        displayName: 'Amount',
        path: 'parameters 7',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    // exports.xxx = {
    //     name: 'o_velo',
    //     displayName: 'Osc',
    //     path: 'parameters 8',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    // },
    OscFreq: {
        displayName: 'Freq',
        path: 'parameters 12',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    OscMulti: {
        displayName: 'Multi',
        path: 'parameters 13',
        options: ['x  0.001', 'x  0.01', 'x  0.1', 'x  1', 'x 10'],
        unitType: constants.unitType.ENUM,
    },
    OscEnvAttack: {
        displayName: 'A /',
        path: 'parameters 14',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    OscEnvDecay: {
        displayName: 'D \\',
        path: 'parameters 17',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    Spread: {
        displayName: 'Spread',
        path: 'parameters 28',
        inputRange: [0, 100],
        unitType: constants.unitType.INT,
    },
    Pitch: {
        displayName: 'Pitch',
        path: 'parameters 34',
        inputRange: [-48, 48],
        unitType: constants.unitType.INT,
    },
    Detune: {
        displayName: '- / +',
        path: 'parameters 35',
        inputRange: [-50, 50],
        unitType: constants.unitType.INT,
    },
    // exports.xxx = {
    //     name: 'pitch_lfo',
    //     displayName: 'Pitch',
    //     path: 'parameters 36',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    PitchEnv: {
        name: 'pitch_env',
        displayName: 'Env',
        path: 'parameters 38',
        inputRange: [-48, 48],
        unitType: constants.unitType.INT,
        unitStyle: constants.unitStyle.SEMITONES,
    },
    PitchEnvAttack: {
        displayName: 'A /',
        path: 'parameters 39',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    PitchEnvDecay: {
        displayName: 'D \\',
        path: 'parameters 42',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    // exports.xxx = {
    //     name: 'vol_velo',
    //     displayName: 'Vol',
    //     path: 'parameters 54',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    // exports.xxx = {
    //     name: 'vol_lfo',
    //     displayName: 'Vol',
    //     path: 'parameters 55',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    // exports.xxx = {
    //     name: 'pan_lfo',
    //     displayName: 'Pan',
    //     path: 'parameters 57',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    AmpAttack: {
        displayName: 'A /',
        path: 'parameters 59',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    AmpDecay: {
        displayName: 'D \\',
        path: 'parameters 62',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    AmpSustain: {
        displayName: 'S --',
        path: 'parameters 65',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    AmpRelease: {
        displayName: 'R \\',
        path: 'parameters 66',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    AmpLoop: {
        displayName: 'Loop',
        path: 'parameters 68',
        options: ['none', 'loop', 'beat', 'sync', 'trig'],
        unitType: constants.unitType.ENUM,
    },
    AmpSync: {
        displayName: 'Sync',
        path: 'parameters 70',
        options: ['1/48', '1/32', '1/24', '1/16', '1/12', '1/8', '1/6', '1/4', '1/3', '1/2', '1', '1.5', '2', '3', '4'],
        unitType: constants.unitType.ENUM,
    },
    // exports.xxx = {
    //     name: 'time_velo',
    //     displayName: 'Time',
    //     path: 'parameters 71',
    //     inputRange: [-100, 100],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    FilterType: {
        displayName: 'Type',
        path: 'parameters 76',
        options: ['low -\\', 'high /-', 'band /\\', 'notch \\/'],
        unitType: constants.unitType.ENUM,
    },
    FilterCircuit: {
        displayName: 'Circuit',
        path: 'parameters 77',
        options: ['clean', 'osr', 'ms2', 'smp', 'prd'],
        unitType: constants.unitType.ENUM,
    },
    FilterSlope: {
        displayName: 'Slope',
        path: 'parameters 79',
        options: ['12 dB', '24 dB'],
        unitType: constants.unitType.ENUM,
    },
    FilterFreq: {
        displayName: 'Freq',
        path: 'parameters 80',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    FilterRes: {
        displayName: 'Res',
        path: 'parameters 81',
        inputRange: [0, 1.25],
        unitType: constants.unitType.FLOAT,
    },
    FilterDrive: {
        displayName: 'Drive',
        path: 'parameters 83',
        inputRange: [0, 24],
        unitType: constants.unitType.FLOAT,
    },
    FilterEnv: {
        displayName: 'Env',
        path: 'parameters 85',
        inputRange: [-72, 72],
    },
    FilterEnvAttack: {
        displayName: 'A /',
        path: 'parameters 86',
        inputRange: [0, 1],
        unitType: constants.unitType.FLOAT,
    },
    FilterEnvDecay: {
        displayName: 'D \\',
        path: 'parameters 89',
        inputRange: [0, 1],
        defaultValue: 1,
        unitType: constants.unitType.FLOAT,
    },
    // exports.xxx = {
    //     name: 'f_velo',
    //     displayName: 'Filter',
    //     path: 'parameters 101',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '1.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    // exports.xxx = {
    //     name: 'f_lfo',
    //     displayName: 'Filter',
    //     path: 'parameters 102',
    //     inputRange: [0, 100],
    //     outputRange: ['0.', '24.'],
    //     unitType: constants.unitType.INT,
    //     unitStyle: constants.unitStyle.PERCENT,
    // }
    ShaperType: {
        displayName: 'Shaper',
        path: 'parameters 104',
        options: ['soft', 'hard', 'sine', '4bit'],
        unitType: constants.unitType.ENUM,
    },
    ShaperLevel: {
        displayName: '- / +',
        path: 'parameters 105',
        inputRange: [0, 100],
        unitType: constants.unitType.INT,
    },
    ShaperPre: {
        displayName: 'Route',
        path: 'parameters 106',
        options: ['<<<', '>>>'],
        unitType: constants.unitType.ENUM,
    },
}

// // synth kick
// exports.xxx = {
//     name: 'decay',
//     displayName: 'Decay',
//     path: 'parameters 1',
//     inputRange: [0, 100],
//     exponent: 0.8,
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'pitch',
//     displayName: 'Pitch',
//     path: 'parameters 2',
//     inputRange: [30, 200],
//     exponent: 3.333,
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.HERTZ,
// }
// exports.xxx = {
//     name: 'env',
//     displayName: 'Env',
//     path: 'parameters 3',
//     inputRange: [0, 100],
//     exponent: 0.8,
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'attack',
//     displayName: 'Attack',
//     path: 'parameters 4',
//     inputRange: [0, 100],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'click',
//     displayName: 'Click',
//     path: 'parameters 5',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'drive',
//     displayName: 'Drive',
//     path: 'parameters 6',
//     inputRange: [0, 100],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'tone',
//     displayName: 'Tone',
//     path: 'parameters 7',
//     inputRange: [0, 100],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }

// // synth snare
// exports.xxx = {
//     name: 'decay',
//     displayName: 'Decay',
//     path: 'parameters 1',
//     inputRange: [0, 100],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'tune',
//     displayName: 'Tune',
//     path: 'parameters 2',
//     inputRange: [0, 100],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'filter',
//     displayName: 'Filter',
//     path: 'parameters 3',
//     inputRange: ['LP -\\', 'HP /-', 'BP /\\'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'tone',
//     displayName: 'Tone',
//     path: 'parameters 4',
//     inputRange: [0, 100],
//     unitType: constants.unitType.INT,
// }
// exports.xxx = {
//     name: 'colour',
//     displayName: 'Colour',
//     path: 'parameters 5',
//     inputRange: [0, 100],
//     unitType: constants.unitType.INT,
// }

// // tension
// exports.xxx = {
//     name: 'string_decay',
//     displayName: 'Decay',
//     path: 'parameters 57',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'string_ratio',
//     displayName: 'Ratio',
//     path: 'parameters 59',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'string_inharm',
//     displayName: 'Inharm',
//     path: 'parameters 60',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'string_damping',
//     displayName: 'Damping',
//     path: 'parameters 55',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'string_octave',
//     displayName: 'Octave',
//     path: 'parameters 3',
//     inputRange: [-3, 3],
//     unitType: constants.unitType.INT,
// }
// exports.xxx = {
//     name: 'string_semi',
//     displayName: 'Semi',
//     path: 'parameters 4',
//     inputRange: [-12, 12],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.SEMITONES,
// }
// exports.xxx = {
//     name: 'string_error',
//     displayName: 'Error',
//     path: 'parameters 12',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'excitor_type',
//     displayName: 'Type',
//     path: 'parameters 33',
//     inputRange: ['bow', 'hammer', 'bouncing', 'plectrum'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'excitor_protusion',
//     displayName: 'Force',
//     path: 'parameters 34',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'excitor_stiffness',
//     displayName: 'Stiffnes',
//     path: 'parameters 37',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'excitor_speed',
//     displayName: 'Speed',
//     path: 'parameters 40',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'excitor_position',
//     displayName: 'Position',
//     path: 'parameters 24',
//     inputRange: [0, 50],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'excitor_damping',
//     displayName: 'Damping',
//     path: 'parameters 43',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'damper_on',
//     displayName: 'I/O',
//     path: 'parameters 46',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'damper_mass',
//     displayName: 'Mass',
//     path: 'parameters 47',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'damper_stiffness',
//     displayName: 'Stiffnes',
//     path: 'parameters 49',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'damper_position',
//     displayName: 'Position',
//     path: 'parameters 28',
//     inputRange: [0, 50],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'damper_damping',
//     displayName: 'Damping',
//     path: 'parameters 53',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'finger_on',
//     displayName: 'I/O',
//     path: 'parameters 61',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'finger_mass',
//     displayName: 'Mass',
//     path: 'parameters 63',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'finger_stiffness',
//     displayName: 'Stiffnes',
//     path: 'parameters 62',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'fret_stiffness',
//     displayName: 'Fret',
//     path: 'parameters 66',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'pickup_on',
//     displayName: 'I/O',
//     path: 'parameters 44',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'pickup_position',
//     displayName: 'Position',
//     path: 'parameters 45',
//     inputRange: [0, 50],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'body_on',
//     displayName: 'I/O',
//     path: 'parameters 91',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'body_type',
//     displayName: 'Type',
//     path: 'parameters 92',
//     inputRange: ['piano', 'guitar', 'violin', 'generic'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'body_size',
//     displayName: 'Size',
//     path: 'parameters 93',
//     inputRange: ['xs', 's', 'm', 'l', 'xl'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'body_decay',
//     displayName: 'Decay',
//     path: 'parameters 94',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'body_lowcut',
//     displayName: 'Lowcut',
//     path: 'parameters 95',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'body_highcut',
//     displayName: 'Highcut',
//     path: 'parameters 96',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'body_balance',
//     displayName: 'Str/Body',
//     path: 'parameters 98',
//     inputRange: [-100, 100],
//     outputRange: ['0', '1.'],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_protusion',
//     displayName: 'Force',
//     path: 'parameters 36',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_stiffness',
//     displayName: 'Stiffnes',
//     path: 'parameters 39',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_speed',
//     displayName: 'Speed',
//     path: 'parameters 42',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_position',
//     displayName: 'Position',
//     path: 'parameters 27',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_damper',
//     displayName: 'Damper',
//     path: 'parameters 31',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'velocity_finger',
//     displayName: 'Finger',
//     path: 'parameters 65',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }

// // collision
// exports.xxx = {
//     name: 'structure',
//     displayName: 'Routing',
//     path: 'devices 0 parameters 1',
//     inputRange: ['1 > 2', '1 + 2'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'mallet_on',
//     displayName: 'I/O',
//     path: 'devices 0 parameters 6',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'mallet_volume',
//     displayName: 'Volume',
//     path: 'devices 0 parameters 7',
//     inputRange: [-60, 0],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.DECIBEL,
// }
// exports.xxx = {
//     name: 'mallet_volume_vel',
//     displayName: '< vel',
//     path: 'devices 0 parameters 8',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'mallet_stiffness',
//     displayName: 'Stiffnes',
//     path: 'devices 0 parameters 10',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'mallet_stiffness_vel',
//     displayName: '< vel',
//     path: 'devices 0 parameters 11',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'mallet_noise',
//     displayName: 'Noise',
//     path: 'devices 0 parameters 13',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'mallet_noise_vel',
//     displayName: '< vel',
//     path: 'devices 0 parameters 14',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'mallet_colour',
//     displayName: 'Colour',
//     path: 'devices 0 parameters 16',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'noise_on',
//     displayName: 'I/O',
//     path: 'devices 0 parameters 17',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'noise_volume',
//     displayName: 'Volume',
//     path: 'devices 0 parameters 18',
//     inputRange: [-60, 0],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.DECIBEL,
// }
// exports.xxx = {
//     name: 'filter_type',
//     displayName: 'Filter',
//     path: 'devices 0 parameters 21',
//     inputRange: ['lp -\\', 'hp /-', 'bp /\\', 'lhp /-\\'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'filter_freq',
//     displayName: 'Freq',
//     path: 'devices 0 parameters 22',
//     inputRange: [0, 1],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'filter_res',
//     displayName: 'Res',
//     path: 'devices 0 parameters 26',
//     inputRange: [0, 1],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'env_freq',
//     displayName: 'Freq <',
//     path: 'devices 0 parameters 25',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'env_attack',
//     displayName: 'A /',
//     path: 'devices 0 parameters 27',
//     inputRange: [0, 1],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'env_decay',
//     displayName: 'D \\',
//     path: 'devices 0 parameters 28',
//     inputRange: [0, 1],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'env_sustain',
//     displayName: 'S --',
//     path: 'devices 0 parameters 29',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'env_release',
//     displayName: 'R \\',
//     path: 'devices 0 parameters 30',
//     inputRange: [0, 1],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'reso1_on',
//     displayName: 'Reso1',
//     path: 'devices 0 parameters 31',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso1_type',
//     displayName: 'Type',
//     path: 'devices 0 parameters 32',
//     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso1_quality',
//     displayName: 'Quality',
//     path: 'devices 0 parameters 33',
//     inputRange: ['basic', 'few', 'medium', 'full'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso1_decay',
//     displayName: 'Decay',
//     path: 'devices 0 parameters 40',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_material',
//     displayName: 'Material',
//     path: 'devices 0 parameters 44',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'reso1_ratio',
//     displayName: 'Ratio',
//     path: 'devices 0 parameters 50',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_brightness',
//     displayName: 'Bright',
//     path: 'devices 0 parameters 51',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_inharmonics',
//     displayName: 'Inharm',
//     path: 'devices 0 parameters 53',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_position',
//     displayName: 'Position',
//     path: 'devices 0 parameters 57',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_volume',
//     displayName: 'Volume',
//     path: 'devices 0 parameters 63',
//     inputRange: [0, 1],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'reso1_radius',
//     displayName: 'Radius',
//     path: 'devices 0 parameters 47',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_opening',
//     displayName: 'Opening',
//     path: 'devices 0 parameters 55',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_tune',
//     displayName: 'Tune',
//     path: 'devices 0 parameters 34',
//     inputRange: [-48, 48],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.SEMITONES,
// }
// exports.xxx = {
//     name: 'reso1_fine',
//     displayName: '+ / -',
//     path: 'devices 0 parameters 35',
//     inputRange: [-50, 50],
//     unitType: constants.unitType.INT,
// }
// exports.xxx = {
//     name: 'reso1_env',
//     displayName: '< Env',
//     path: 'devices 0 parameters 37',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso1_time',
//     displayName: '< Time',
//     path: 'devices 0 parameters 39',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_on',
//     displayName: 'Reso2',
//     path: 'devices 0 parameters 64',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso2_type',
//     displayName: 'Type',
//     path: 'devices 0 parameters 65',
//     inputRange: ['beam', 'marimba', 'string', 'membrane', 'plate', 'pipe', 'tube'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso2_quality',
//     displayName: 'Quality',
//     path: 'devices 0 parameters 66',
//     inputRange: ['basic', 'few', 'medium', 'full'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'reso2_decay',
//     displayName: 'Decay',
//     path: 'devices 0 parameters 73',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_material',
//     displayName: 'Material',
//     path: 'devices 0 parameters 77',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'reso2_ratio',
//     displayName: 'Ratio',
//     path: 'devices 0 parameters 83',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_brightness',
//     displayName: 'Bright',
//     path: 'devices 0 parameters 84',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_inharmonics',
//     displayName: 'Inharm',
//     path: 'devices 0 parameters 86',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_position',
//     displayName: 'Position',
//     path: 'devices 0 parameters 90',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_volume',
//     displayName: 'Volume',
//     path: 'devices 0 parameters 96',
//     inputRange: [0, 1],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'reso2_radius',
//     displayName: 'Radius',
//     path: 'devices 0 parameters 80',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_opening',
//     displayName: 'Opening',
//     path: 'devices 0 parameters 88',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_tune',
//     displayName: 'Tune',
//     path: 'devices 0 parameters 67',
//     inputRange: [-48, 48],
//     unitType: constants.unitType.INT,
//     unitStyle: constants.unitStyle.SEMITONES,
// }
// exports.xxx = {
//     name: 'reso2_fine',
//     displayName: '+ / -',
//     path: 'devices 0 parameters 68',
//     inputRange: [-50, 50],
//     unitType: constants.unitType.INT,
// }
// exports.xxx = {
//     name: 'reso2_env',
//     displayName: '< Env',
//     path: 'devices 0 parameters 70',
//     inputRange: [-100, 100],
//     outputRange: ['-1.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'reso2_time',
//     displayName: '< Time',
//     path: 'devices 0 parameters 72',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo1_shape',
//     displayName: 'Shape',
//     path: 'devices 0 parameters 98',
//     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo1_retrig',
//     displayName: 'Retrig',
//     path: 'devices 0 parameters 99',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo1_depth',
//     displayName: 'Depth',
//     path: 'devices 0 parameters 105',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo1_rate',
//     displayName: 'Rate',
//     path: 'devices 0 parameters 101',
//     inputRange: [0, 1],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'lfo1_dest_a',
//     displayName: 'Dest A',
//     path: 'devices 0 parameters 107',
//     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo1_amount_a',
//     path: 'devices 0 parameters 108',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo1_dest_b',
//     displayName: 'Dest B',
//     path: 'devices 0 parameters 109',
//     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo2rate', 'lfo2amt'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo1_amount_b',
//     path: 'devices 0 parameters 110',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo2_shape',
//     displayName: 'Shape',
//     path: 'devices 0 parameters 112',
//     inputRange: ['sine', 'square', 'triangle', 'saw up', 'saw down', 's&h', 'noise'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo2_retrig',
//     displayName: 'Retrig',
//     path: 'devices 0 parameters 113',
//     inputRange: ['off', 'on'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo2_depth',
//     displayName: 'Depth',
//     path: 'devices 0 parameters 119',
//     inputRange: [0, 100],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo2_rate',
//     displayName: 'Rate',
//     path: 'devices 0 parameters 115',
//     inputRange: [0, 1],
//     outputRange: ['0.', '1.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.FLOAT,
// }
// exports.xxx = {
//     name: 'lfo2_dest_a',
//     displayName: 'Dest A',
//     path: 'devices 0 parameters 121',
//     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo2_amount_a',
//     path: 'devices 0 parameters 122',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }
// exports.xxx = {
//     name: 'lfo2_dest_b',
//     displayName: 'Dest B',
//     path: 'devices 0 parameters 123',
//     inputRange: ['-', 'stiffnes', 'noisefrq', 'noiselvl', 'res1tune', 'res1pos', 'res1pan', 'res1open', 'res2in', 'res2tune', 'res2pos', 'res2pan', 'res2open', 'volume', 'lfo1rate', 'lfo1amt', 'lfo2rate'],
//     unitType: constants.unitType.ENUM,
// }
// exports.xxx = {
//     name: 'lfo2_amount_b',
//     path: 'devices 0 parameters 124',
//     inputRange: [-20, 20],
//     outputRange: ['-5.', '5.'],
//     unitType: constants.unitType.FLOAT,
//     unitStyle: constants.unitStyle.PERCENT,
// }

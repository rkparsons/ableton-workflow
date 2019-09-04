exports.voice = {
    Settings: {
        macroLayout: 'settings',
    },

    Drum_A: {
        index: 1,
        basePath: 'kick',
        samples: ['sub', 'deep', 'tube', 'grit', 'mid'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Drum_B: {
        index: 2,
        basePath: 'kick',
        samples: ['digital', 'heavy', 'decay', 'rumble'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Trans: {
        index: 3,
        basePath: 'trans',
        samples: ['soft', 'hard', 'clap', 'click', 'body'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Layer: {
        index: 4,
        basePath: 'layer',
        samples: ['kick', 'snare', 'clap', 'static', 'organic', 'synth'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Acoustic: {
        index: 5,
        basePath: 'kick',
        samples: ['acousticA', 'acousticB'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Synth: {
        index: 6,
        devices: ['chain', 'midi', 'synth_kick'],
        macroLayout: 'synth_kick',
    },
}

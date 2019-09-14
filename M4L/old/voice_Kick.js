exports.voice = {
    Drum_A: {
        index: 0,
        basePath: 'kick',
        samples: ['sub', 'deep', 'tube', 'grit', 'mid'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Drum_B: {
        index: 1,
        basePath: 'kick',
        samples: ['digital', 'heavy', 'decay', 'rumble'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Trans: {
        index: 2,
        basePath: 'trans',
        samples: ['soft', 'hard', 'clap', 'click', 'body'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Layer: {
        index: 3,
        basePath: 'layer',
        samples: ['kick', 'snare', 'clap', 'static', 'organic', 'synth'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Acoustic: {
        index: 4,
        basePath: 'kick',
        samples: ['acousticA', 'acousticB'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Synth: {
        index: 5,
        devices: ['chain', 'midi', 'synth_kick'],
        macroLayout: 'synth_kick',
    },
}

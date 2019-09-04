exports.voice = {
    Settings: {
        macroLayout: 'settings',
    },

    Drum_A: {
        index: 1,
        basePath: 'tom low',
        samples: ['clean', 'tube'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Drum_B: {
        index: 2,
        basePath: 'tom low',
        samples: ['grit', 'synth', 'decay'],
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
}

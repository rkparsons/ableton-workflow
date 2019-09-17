exports.voice = {
    Drum_A: {
        index: 0,
        basePath: 'tom mid',
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
        samples: ['clean', 'tube'],
    },

    Drum_B: {
        index: 1,
        basePath: 'tom mid',
        samples: ['grit', 'synth', 'decay', 'high'],
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
}
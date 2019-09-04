exports.voice = {
    Drum_A: {
        index: 0,
        basePath: 'snare',
        samples: ['high', 'tight', 'grit', 'mid'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Drum_B: {
        index: 1,
        basePath: 'snare',
        samples: ['punch', 'layer', 'synth'],
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
        samples: ['close', 'cold', 'cop', 'dry', 'light', 'old', 'steel', 'vista'],
        overrideSampleNames: ['hit', 'rim'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Synth: {
        index: 5,
        devices: ['chain', 'midi', 'synth_snare'],
        macroLayout: 'synth_snare',
    },
}

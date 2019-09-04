exports.voice = {
    Settings: {
        macroLayout: 'settings',
    },

    Drum_A: {
        index: 1,
        basePath: 'snare',
        samples: ['high', 'tight', 'grit', 'mid'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Drum_B: {
        index: 2,
        basePath: 'snare',
        samples: ['punch', 'layer', 'synth'],
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
        samples: ['close', 'cold', 'cop', 'dry', 'light', 'old', 'steel', 'vista'],
        overrideSampleNames: ['hit', 'rim'],
        devices: ['chain', 'midi', 'sampler'],
        macroLayout: 'sampler',
    },

    Synth: {
        index: 6,
        devices: ['chain', 'midi', 'synth_snare'],
        macroLayout: 'synth_snare',
    },
}

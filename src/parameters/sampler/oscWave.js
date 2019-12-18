import { EnumParameter } from '../../models/enumParameter'

export class SamplerOscWave extends EnumParameter {
    constructor(pathToChain, deviceTypeToIndex) {
        super({
            name: '/\\/',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 6',
            options: ['sin', 'sin 4bit', 'sin 8bit', 'saw 3', 'saw 4', 'saw 6', 'saw 8', 'saw 16', 'saw 32', 'saw 64', 'saw D', 'squ 3', 'squ 4', 'squ 6', 'squ 8', 'squ 16', 'squ 32', 'squ 64', 'squ D', 'tri', 'noise'],
        })
    }
}

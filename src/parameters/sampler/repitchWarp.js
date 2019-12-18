import { RepitchWarpParameter } from '../../models/repitchWarpParameter'

export class SamplerRepitchWarp extends RepitchWarpParameter {
    constructor({ pathToChain, deviceTypeToIndex }) {
        super({
            name: 'Repitch',
            basePath: `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`,
            path: 'parameters 34',
            pathDecimal: 'parameters 35',
            inputRange: [-7.5, 7.5],
        })
    }
}
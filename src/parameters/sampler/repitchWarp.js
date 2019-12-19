import { RepitchWarpParameter } from '../../models/repitchWarpParameter'

export class SamplerRepitchWarp extends RepitchWarpParameter {
    constructor({ pathToChain, deviceIndex }) {
        super({
            name: 'Repitch',
            basePath: `${pathToChain} devices ${deviceIndex}`,
            path: 'parameters 34',
            pathDecimal: 'parameters 35',
            inputRange: [-7.5, 7.5],
        })
    }
}

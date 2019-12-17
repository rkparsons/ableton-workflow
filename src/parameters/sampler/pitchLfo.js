export class SamplerPitchLfo {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Pitch'
        this.path = 'parameters 36'
    }
}

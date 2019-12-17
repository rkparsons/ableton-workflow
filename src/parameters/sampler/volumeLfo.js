export class SamplerVolumeLfo {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'Vol'
        this.path = 'parameters 55'
    }
}

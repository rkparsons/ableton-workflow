export class SamplerAmpSustain {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpSustain'
        this.displayName = 'S --'
        this.path = 'parameters 65'
        this.defaultValue = 1
    }
}

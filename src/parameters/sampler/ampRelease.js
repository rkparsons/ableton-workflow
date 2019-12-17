export class SamplerAmpRelease {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpRelease'
        this.displayName = 'R \\'
        this.path = 'parameters 66'
        this.defaultValue = 1
    }
}

export class SamplerAmpAttack {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpAttack'
        this.displayName = 'A /'
        this.path = 'parameters 59'
    }
}

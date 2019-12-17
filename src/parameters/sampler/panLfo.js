export class SamplerPanLfo {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'PanLfo'
        this.displayName = 'Pan'
        this.path = 'parameters 57'
    }
}

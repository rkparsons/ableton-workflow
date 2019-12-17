export class SamplerVolumeVelocity {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'VolumeVelocity'
        this.displayName = 'Vol'
        this.path = 'parameters 54'
    }
}

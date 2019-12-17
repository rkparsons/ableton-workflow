export class MixerVolume {
    constructor(pathToChain) {
        this.basePath = `${pathToChain} mixer_device`
        this.name = 'Volume'
        this.path = 'volume'
        this.defaultValue = 0.85
    }
}

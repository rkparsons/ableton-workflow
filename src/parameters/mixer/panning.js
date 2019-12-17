export class MixerPanning {
    constructor(pathToChain) {
        this.basePath = `${pathToChain} mixer_device`
        this.name = 'Panning'
        this.path = 'panning'
        this.inputRange = [-1, 1]
    }
}

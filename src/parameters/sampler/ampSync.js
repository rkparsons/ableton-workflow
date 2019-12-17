import unitType from '../../constants/unitType'

export class SamplerAmpSync {
    constructor(pathToChain, deviceTypeToIndex) {
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['Sampler']}`
        this.name = 'AmpSync'
        this.displayName = 'Sync'
        this.path = 'parameters 70'
        // todo: use same prop for inputRange and options
        this.options = ['1/48', '1/32', '1/24', '1/16', '1/12', '1/8', '1/6', '1/4', '1/3', '1/2', '1', '1.5', '2', '3', '4']
        this.unitType = unitType.ENUM
    }
}

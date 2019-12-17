import { CCParam } from './cc'

export class CCStart extends CCParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'Start'
        this.displayName = 'Start'
        this.path = 'parameters 1'
        this.randomRange = [0, 0]
    }
}

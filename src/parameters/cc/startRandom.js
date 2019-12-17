import { CCParam } from './cc'

export class CCStartRandom extends CCParam {
    constructor(pathToChain, deviceTypeToIndex) {
        super(pathToChain, deviceTypeToIndex)
        this.name = 'StartRandom'
        this.displayName = 'Start'
        this.path = 'parameters 2'
    }
}

import { Param } from '../param'

export class ChainParam extends Param {
    constructor(pathToChain) {
        super()
        this.basePath = pathToChain
        this.path = ''
    }
}

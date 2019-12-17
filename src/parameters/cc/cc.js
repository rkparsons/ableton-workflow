import { Param } from '../param'
import unitType from '../../constants/unitType'

export class CCParam extends Param {
    constructor(pathToChain, deviceTypeToIndex) {
        super()
        this.basePath = `${pathToChain} devices ${deviceTypeToIndex['CC']}`
        this.inputRange = [0, 127]
        this.unitType = unitType.INT
    }
}

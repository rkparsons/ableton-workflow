import { Param } from '../param'
import unitType from '../../constants/unitType'

export class CCParam extends Param {
    constructor() {
        super()
        this.type = 'CC'
        this.inputRange = [0, 127]
        this.unitType = unitType.INT
    }
}

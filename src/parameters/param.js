import unitType from '../constants/unitType'

export class Param {
    constructor() {
        this.displayName = ''
        this.property = 'value'
        this.inputRange = [0, 1]
        this.speed = 1
        this.unitType = unitType.FLOAT
        this.showValue = false
    }
}

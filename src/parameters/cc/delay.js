import { CCParam } from './cc'

export class CCDelay extends CCParam {
    constructor() {
        super()
        this.name = 'Delay'
        this.displayName = 'Delay'
        this.path = 'parameters 1'
        this.inputRange = [0, 200]
        this.randomRange = [0, 0]
    }
}

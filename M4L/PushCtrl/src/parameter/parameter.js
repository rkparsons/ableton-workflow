import { unitType } from '../constants'

export class Parameter {
    constructor(name, livePath, property, defaultValue, unitType, randomRange) {
        this.name = name
        this.livePath = livePath
        this.property = property
        this.defaultValue = defaultValue || 0
        this.unitType = unitType
        this.randomRange = randomRange
        this.speed = 1
        this.api = null
        this.value = null
        this.callback = null
    }

    getName() {
        return this.name
    }

    observe() {
        this.api.property = this.property
    }

    ignore() {
        this.api.property = null
    }

    onValueChanged(callback) {
        this.callback = callback
        this.api = new LiveAPI(this.observeValue.bind(this), this.livePath)
    }

    observeValue(args) {
        if (args[0] === this.property) {
            this.value = args[1]
            this.callback()
        }
    }

    getDisplayValue() {
        return Math.round(this.value)
    }

    getValue() {
        return this.value
    }

    setValue(value) {
        this.value = value
        this.constrainAndSendValue()
    }

    default() {
        //todo: move this check to configuration
        if (this.name !== 'BPM') {
            this.value = this.defaultValue
            this.constrainAndSendValue()
        }
    }

    random() {
        if (this.randomRange) {
            this.value = this.randomRange[0] + Math.random() * (this.randomRange[1] - this.randomRange[0])
            this.constrainAndSendValue()
        }
    }

    constrainAndSendValue() {
        this.value = Math.max(this.min, this.value)
        this.value = Math.min(this.max, this.value)

        if (this.api) {
            this.api.set(this.property, this.getOutputValue())
        }
    }

    sendValue(delta) {
        this.value += this.getIncrement(delta)
        this.constrainAndSendValue()
    }

    getIncrement(delta) {
        return this.speed * (delta < 50 ? delta : delta - 128)
    }

    getOutputValue() {
        return this.unitType === unitType.FLOAT ? Math.round(this.value * 1000) / 1000 : Math.round(this.value)
    }
}

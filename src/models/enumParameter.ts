import { Parameter } from '~/models/parameter'
import UnitType from '~/constants/unitType'

type Props = {
    name: string
    basePath: string
    path?: string
    property?: string
    defaultValue?: number
    options: string[]
    randomRange?: number[]
}

export class EnumParameter extends Parameter {
    options: string[]
    optionKeys: number[]
    // todo: use same prop for inputRange and options
    constructor({ name, basePath, path, property, defaultValue, options = [], randomRange }: Props) {
        super({ name, basePath, path, property, defaultValue, unitType: UnitType.ENUM, speed: 0.05 })
        this.options = options
        this.optionKeys = Object.keys(options).map(x => Number(x))
        this.min = this.optionKeys[0]
        this.max = this.optionKeys[this.optionKeys.length - 1]
        this.randomRange = randomRange || [this.min, this.max]
    }

    increment() {
        this.value += 1
        this.constrainAndSendValue()
    }

    decrement() {
        this.value -= 1
        this.constrainAndSendValue()
    }

    getDisplayValue() {
        return this.options[Math.round(this.value)]
    }
}

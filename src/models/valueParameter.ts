import ASCII from '../constants/ascii'
import { Parameter } from './parameter'
import UnitType from '../constants/unitType'

type Props = {
    name: string
    basePath: string
    path: string
    property: string
    defaultValue: number
    unitType: UnitType
    inputRange: number[]
    randomRange?: number[]
    showValue: boolean
    speed: number
}

export class ValueParameter extends Parameter {
    inputRange: number[]
    isBipolar: boolean

    constructor({ name, basePath, path, property, defaultValue, unitType, inputRange, randomRange, showValue, speed }: Props) {
        super({ name, basePath, path, property, defaultValue, unitType, randomRange, speed })
        this.inputRange = inputRange || [0, 1]
        this.min = this.inputRange[0]
        this.max = this.inputRange[1]
        this.isBipolar = this.max / this.min < 0
        this.showValue = showValue
    }

    getDisplayValue() {
        if (!this.value) {
            return ' '
        }

        return this.showValue ? super.getOutputValue().toString() : this.getDisplayValueGraphic()
    }

    getDisplayValueGraphic() {
        const barCount = this.isBipolar ? 4 : 8
        const padding = String.fromCharCode(...new Array<number>(8).fill(ASCII.EMPTY_BARS))
        const outputPositive = this.isBipolar && this.value < 0 ? '' : this.getMeterOutput(true, barCount, this.value / this.max)
        const outputNegative = this.isBipolar && this.value > 0 ? '' : this.getMeterOutput(false, barCount, this.min === 0 ? 0 : this.value / this.min)

        if (this.isBipolar) {
            return (padding + outputNegative).slice(-4) + (outputPositive + padding).slice(0, 4)
        } else {
            return (outputPositive + padding).slice(0, 8)
        }
    }

    getIncrement(delta: number) {
        return (this.speed * ((this.max - this.min) * (delta < 50 ? delta : delta - 128))) / 100
    }

    getMeterOutput(isPositive: boolean, barCount: number, fraction: number) {
        const fullBars = Math.floor(barCount * fraction)
        const isHalfBar = Math.abs(barCount * fraction) % 1 >= 0.5
        var output = ''

        if (!isPositive && isHalfBar) {
            output += String.fromCharCode(ASCII.MINUS_BAR)
        }

        for (var i = 0; i < fullBars; i++) {
            output += String.fromCharCode(ASCII.TWO_BARS)
        }

        if (isPositive && isHalfBar) {
            output += String.fromCharCode(ASCII.PLUS_BAR)
        }

        return output
    }
}

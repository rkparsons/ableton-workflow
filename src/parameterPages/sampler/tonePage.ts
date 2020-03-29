import { Blank } from '~/parameters/blank'
import FilterCircuit from '~/constants/filterCircuit'
import { ParameterPage } from '~/models/parameterPage'
import { SamplerFilterCircuit } from '~/parameters/sampler/filterCircuit'
import { SamplerFilterDrive } from '~/parameters/sampler/filterDrive'
import { SamplerFilterSlope } from '~/parameters/sampler/filterSlope'
import { SamplerShaperLevel } from '~/parameters/sampler/shaperLevel'
import { SamplerShaperPre } from '~/parameters/sampler/shaperPre'
import { SamplerShaperType } from '~/parameters/sampler/shaperType'

export class TonePage extends ParameterPage {
    filterCircuit: SamplerFilterCircuit
    filterSlope: SamplerFilterSlope
    filterDrive: SamplerFilterDrive
    shaperPre: SamplerShaperPre
    shaperType: SamplerShaperType
    shaperLevel: SamplerShaperLevel
    blankParam: Blank

    constructor(pageIndex: number, pathToChain: string, deviceIndex: number) {
        const filterCircuit = new SamplerFilterCircuit({ pathToChain, deviceIndex })
        const filterSlope = new SamplerFilterSlope({ pathToChain, deviceIndex })
        const filterDrive = new SamplerFilterDrive({ pathToChain, deviceIndex })
        const shaperPre = new SamplerShaperPre({ pathToChain, deviceIndex })
        const shaperType = new SamplerShaperType({ pathToChain, deviceIndex })
        const shaperLevel = new SamplerShaperLevel({ pathToChain, deviceIndex })
        const blankParam = new Blank()

        const parameters = [filterCircuit, filterSlope, filterDrive, shaperPre, shaperType, shaperLevel]

        super(pageIndex, 'Tone', parameters)

        this.filterCircuit = filterCircuit
        this.filterSlope = filterSlope
        this.filterDrive = filterDrive
        this.shaperPre = shaperPre
        this.shaperType = shaperType
        this.shaperLevel = shaperLevel
        this.blankParam = blankParam
    }

    // todo: setup handlers for each param
    handleParameterChange(index: number, callback: () => void) {
        const parameter = this.getParameter(index)

        if (parameter instanceof SamplerFilterCircuit) {
            this.handleFilterCircuit()
        }

        super.handleParameterChange(index, callback)
    }

    handleFilterCircuit() {
        if (this.filterCircuit.getDisplayValue() === FilterCircuit.CLEAN) {
            this.parameters = [this.filterCircuit, this.filterSlope, this.blankParam, this.shaperPre, this.shaperType, this.shaperLevel]
        } else {
            this.parameters = [this.filterCircuit, this.filterSlope, this.filterDrive, this.shaperPre, this.shaperType, this.shaperLevel]
        }
    }
}

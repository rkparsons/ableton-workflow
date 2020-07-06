import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { EnumParameter } from '~/models/enumParameter'
import Mode from '~/constants/mode'
import { Rack } from '~/models/rack'
import { SamplerDrumCategory } from '~/parameters/sampler/drumCategory'
import { SamplerDrumSelect } from '~/parameters/sampler/drumSelect'
import { SamplerMelodicCategory } from '~/parameters/sampler/melodicCategory'
import { SamplerMelodicSelect } from '~/parameters/sampler/melodicSelect'
import { UiMode } from '~/uiModes/uiMode'
import log from '~/util/log'

export class ChainParamsMode extends UiMode {
    constructor(rack: Rack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType: Mode) {
        return modeType === Mode.CHAIN_PARAMS
    }

    observe() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const activeChain = activeInstrumentRack.getActiveChain()

            activeChain.getMuteParameter().observe()
            activeChain
                .getActiveParameterPage()
                .getParameters()
                .forEach((parameter) => parameter.observe())
        }
    }

    ignore() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const activeChain = activeInstrumentRack.getActiveChain()

            activeChain.getMuteParameter().ignore()
            activeChain
                .getActiveParameterPage()
                .getParameters()
                .forEach((parameter) => parameter.ignore())
        }
    }

    handleTempoControl(encoderValue: number) {
        const activeInstrumentRack = this.getRack()?.getActiveInstrumentRack()

        if (!activeInstrumentRack) {
            return
        }

        const sampleParameter = activeInstrumentRack
            .getActiveChain()
            .getActiveParameterPage()
            .getParameters()
            .find((parameter) => parameter instanceof SamplerDrumSelect || parameter instanceof SamplerMelodicSelect)

        if (!sampleParameter) {
            return
        }

        const samplerSelectParam = sampleParameter as EnumParameter

        if (encoderValue === 1) {
            samplerSelectParam.increment()
        } else if (encoderValue === 127) {
            samplerSelectParam.decrement()
        }

        this.updateDisplay()
    }

    handleTrackSelectButtons(isPressed: boolean, buttonIndex: number) {
        if (!isPressed) {
            return
        }

        const activeChain = this.rack.getActiveInstrumentRack()?.getActiveChain()
        const isMuted = activeChain && activeChain.isMuted()

        if (activeChain && !isMuted) {
            this.ignore()
            activeChain.setActiveParameterPage(buttonIndex)
            this.observe()
        }
    }

    handleTrackStateButtons(isPressed: boolean, buttonIndex: number) {
        if (!isPressed || buttonIndex !== 0) {
            return
        }

        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const muteParameter = activeInstrumentRack.getActiveChain().getMuteParameter()

            muteParameter.setValue(muteParameter.getValue() ? 0 : 1)
        }
    }

    executePageLevelCommand(targetCommand: Command) {
        const activeChain = this.rack.getActiveInstrumentRack()?.getActiveChain()

        if (activeChain && !activeChain.isMuted()) {
            const page = activeChain.getActiveParameterPage()
            targetCommand === Command.DEFAULT ? page.default() : page.random()
        }

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand: Command, encoderIndex: number) {
        const page = this.rack.getActiveInstrumentRack()?.getActiveChain().getActiveParameterPage()

        if (!page) {
            return
        }

        const parameter = page.getParameter(encoderIndex)
        targetCommand === Command.DEFAULT ? parameter.default() : parameter.random()

        if (parameter instanceof SamplerDrumCategory || parameter instanceof SamplerMelodicCategory) {
            // todo: add common base classes SamplerCategory, SamplerSelect
            page.getParameters()
                .find((parameter) => parameter instanceof SamplerDrumSelect || parameter instanceof SamplerMelodicSelect)
                ?.default()
        }

        this.updateDisplay()
    }

    sendValue(value: number, encoderIndex: number) {
        const page = this.rack.getActiveInstrumentRack()?.getActiveChain().getActiveParameterPage()

        if (!page) {
            return
        }

        const parameter = page.getParameter(encoderIndex)

        parameter.sendValue(value)

        if (parameter instanceof SamplerDrumCategory || parameter instanceof SamplerMelodicCategory) {
            page.getParameters()
                .find((parameter) => parameter instanceof SamplerDrumSelect || parameter instanceof SamplerMelodicSelect)
                ?.constrainAndSendValue()
        }

        this.updateDisplay()
    }

    updateDisplay() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const activeChain = activeInstrumentRack.getActiveChain()
            const activeParameterPage = activeChain.getActiveParameterPage()
            const parameterPageNames = activeChain.getParameterPages().map((page) => page.getName())
            const activeParameterPageIndex = activeChain.getActiveParameterPage().getIndex()
            const subPageIndex = activeParameterPage.getSubPageIndex()
            const subPageCount = activeParameterPage.getSubPages().length
            const parameterNames = activeParameterPage.getParameters().map((parameter) => parameter.getName())
            const isChainMuted = activeChain.isMuted()

            if (isChainMuted) {
                this.controlSurface.display.line(0, [' '])
                this.controlSurface.display.line(1, [' '])
                this.controlSurface.display.title(2, [activeChain.getName()])
                this.controlSurface.display.menu(3, ['Off'])
                this.controlSurface.trackSelect.map(0, 0)
                this.controlSurface.trackState.map([0])
            } else {
                this.controlSurface.display.line(0, parameterNames)
                this.controlSurface.display.line(
                    1,
                    activeParameterPage.getParameters().map((parameter) => parameter.getDisplayValue())
                )
                this.controlSurface.display.title(2, [activeChain.getName()], subPageIndex, subPageCount)
                this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
                this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
                this.controlSurface.trackState.map([1])
            }
        } else {
            this.displayBlank()
        }
    }
}

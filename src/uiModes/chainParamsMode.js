import { UiMode } from './uiMode'
import command from '../constants/command'
import mode from '../constants/mode'

//todo: add can handle enum to strategies
export class ChainParamsMode extends UiMode {
    constructor(rack, controlSurface) {
        super(rack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.CHAIN_PARAMS
    }

    observe() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const activeChain = activeInstrumentRack.getActiveChain()

            activeChain.getMuteParameter().observe()
            activeChain
                .getActiveParameterPage()
                .getParameters()
                .forEach(parameter => parameter.observe())
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
                .forEach(parameter => parameter.ignore())
        }
    }

    incrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack().incrementActiveChain()
        this.observe()
    }

    decrementChain() {
        this.ignore()
        this.rack.getActiveInstrumentRack().decrementActiveChain()
        this.observe()
    }

    handleTempoControl(encoderValue) {
        const sampleParameter = this.rack
            .getActiveInstrumentRack()
            .getActiveChain()
            .getActiveParameterPage()
            .getSampleParameter()

        if (!sampleParameter) {
            return
        }

        if (encoderValue === 1) {
            sampleParameter.increment()
        } else if (encoderValue === 127) {
            sampleParameter.decrement()
        }

        this.updateDisplay()
    }

    handleTrackSelectButtons(isPressed, buttonIndex) {
        if (!isPressed) {
            return
        }

        //todo: refactor big method chains into class method
        const activeChain = this.rack.getActiveInstrumentRack().getActiveChain()
        const isMuted = activeChain.isMuted()

        if (!isMuted) {
            this.ignore()
            activeChain.setActiveParameterPage(buttonIndex)
            this.observe()
        }
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed || buttonIndex !== 0) {
            return
        }

        const muteParameter = this.rack
            .getActiveInstrumentRack()
            .getActiveChain()
            .getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))
    }

    executePageLevelCommand(targetCommand) {
        const activeChain = this.rack.getActiveInstrumentRack().getActiveChain()

        if (!activeChain.isMuted()) {
            const page = activeChain.getActiveParameterPage()
            targetCommand === command.DEFAULT ? page.default() : page.random()
        }

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const page = this.rack
            .getActiveInstrumentRack()
            .getActiveChain()
            .getActiveParameterPage()
        const param = page.getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        if (page.categoryParameterIndex === encoderIndex) {
            page.getParameter(page.sampleParameterIndex).default()
        }

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        const page = this.rack
            .getActiveInstrumentRack()
            .getActiveChain()
            .getActiveParameterPage()

        page.getParameter(encoderIndex).sendValue(value)

        //todo: move logic into page
        if (page.getCategoryParameterIndex() === encoderIndex) {
            page.getSampleParameter().constrainAndSendValue()

            if (page.getRepitchWarpParameter()) {
                page.getRepitchWarpParameter().constrainAndSendValue()
            }
        } else if (page.getBpmParameterIndex() === encoderIndex) {
            page.getRepitchWarpParameter().constrainAndSendValue()
        }

        this.updateDisplay()
    }

    updateDisplay() {
        const activeInstrumentRack = this.rack.getActiveInstrumentRack()

        if (activeInstrumentRack) {
            const activeChain = activeInstrumentRack.getActiveChain()
            const activeParameterPage = activeChain.getActiveParameterPage()
            const parameterPageNames = activeChain.getParameterPages().map(page => page.getName())
            const activeParameterPageIndex = activeChain.getActiveParameterPage().getIndex()
            const parameterNames = activeParameterPage.getParameters().map(parameter => parameter.getName())
            const isChainMuted = activeChain.isMuted()

            // why is this executed so many times when chain changed?
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
                    activeParameterPage.getParameters().map(parameter => parameter.getDisplayValue())
                )
                this.controlSurface.display.title(2, [activeChain.getName()])
                this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
                this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
                this.controlSurface.trackState.map([1])
            }
        } else {
            this.displayBlank()
        }
    }
}

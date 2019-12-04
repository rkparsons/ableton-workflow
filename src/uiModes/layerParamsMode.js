import { DrumTrackMode } from './drumTrackMode'
import command from '../constants/command'
import mode from '../constants/mode'

//todo: add can handle enum to strategies
export class LayerParamsMode extends DrumTrackMode {
    constructor(drumRack, controlSurface) {
        super(drumRack, controlSurface)
    }

    canHandle(modeType) {
        return modeType === mode.LAYER_PARAMS
    }

    observe() {
        const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()

        activeDrumLayer.getMuteParameter().observe()
        activeDrumLayer
            .getActiveParameterPage()
            .getParameters()
            .forEach(parameter => parameter.observe())
    }

    ignore() {
        const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()

        activeDrumLayer.getMuteParameter().ignore()
        activeDrumLayer
            .getActiveParameterPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())
    }

    incrementDrumLayer() {
        this.ignore()
        this.drumRack.getActiveDrumPad().incrementActiveDrumLayer()
        this.observe()
    }

    decrementDrumLayer() {
        this.ignore()
        this.drumRack.getActiveDrumPad().decrementActiveDrumLayer()
        this.observe()
    }

    handleTempoControl(encoderValue) {
        const sampleParameter = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
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
        const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()
        const isMuted = activeDrumLayer.isMuted()

        if (!isMuted) {
            this.ignore()
            activeDrumLayer.setActiveParameterPage(buttonIndex)
            this.observe()
        }
    }

    handleTrackStateButtons(isPressed, buttonIndex) {
        if (!isPressed || buttonIndex !== 0) {
            return
        }

        const muteParameter = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
            .getMuteParameter()

        muteParameter.setValue(!Boolean(muteParameter.getValue()))
    }

    executePageLevelCommand(targetCommand) {
        const activeDrumLayer = this.drumRack.getActiveDrumPad().getActiveDrumLayer()

        if (!activeDrumLayer.isMuted()) {
            const page = activeDrumLayer.getActiveParameterPage()
            targetCommand === command.DEFAULT ? page.default() : page.random()
        }

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand, encoderIndex) {
        const page = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
            .getActiveParameterPage()
        const param = page.getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param.default() : param.random()

        if (page.categoryParameterIndex === encoderIndex) {
            page.getParameter(page.sampleParameterIndex).default()
        }

        this.updateDisplay()
    }

    sendValue(value, encoderIndex) {
        const page = this.drumRack
            .getActiveDrumPad()
            .getActiveDrumLayer()
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
        const activeDrumPad = this.drumRack.getActiveDrumPad()

        if (activeDrumPad) {
            const activeDrumLayer = activeDrumPad.getActiveDrumLayer()
            const activeParameterPage = activeDrumLayer.getActiveParameterPage()
            const parameterPageNames = activeDrumLayer.getParameterPages().map(page => page.getName())
            const activeParameterPageIndex = activeDrumLayer.getActiveParameterPage().getIndex()
            const parameterNames = activeParameterPage.getParameters().map(parameter => parameter.getName())
            const isLayerMuted = activeDrumLayer.isMuted()

            // why is this executed so many times when layer changed?
            if (isLayerMuted) {
                this.controlSurface.display.line(0, [' '])
                this.controlSurface.display.line(1, [' '])
                this.controlSurface.display.title(2, [activeDrumLayer.getName()])
                this.controlSurface.display.menu(3, ['Off'])
                this.controlSurface.trackSelect.map(0, 0)
                this.controlSurface.trackState.map([0])
            } else {
                this.controlSurface.display.line(0, parameterNames)
                this.controlSurface.display.line(
                    1,
                    activeParameterPage.getParameters().map(parameter => parameter.getDisplayValue())
                )
                this.controlSurface.display.title(2, [activeDrumLayer.getName()])
                this.controlSurface.display.menu(3, parameterPageNames, activeParameterPageIndex)
                this.controlSurface.trackSelect.map(parameterPageNames.length, activeParameterPageIndex)
                this.controlSurface.trackState.map([1])
            }
        } else {
            this.displayBlankPad()
        }
    }
}

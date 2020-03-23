import Command from '~/constants/command'
import { ControlSurface } from '~/models/controlSurface'
import { DrumPad } from '~/models/drumPad'
import { DrumRack } from '~/models/drumRack'
import { InstrumentChain } from '~/models/instrumentChain'
import { InstrumentRack } from '~/models/instrumentRack'
import { Mutable } from '~/models/mutable'
import { Rack } from '~/models/rack'
import { UiMode } from '~/uiModes/uiMode'
import command from '~/constants/command'

export abstract class MixerMode extends UiMode {
    constructor(rack: Rack, controlSurface: ControlSurface) {
        super(rack, controlSurface)
    }

    abstract getRack(): DrumRack | InstrumentRack | undefined

    abstract getTitle(): string

    observe() {
        this.getRack()
            ?.getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.observe())
    }

    ignore() {
        this.getRack()
            ?.getActiveMixerPage()
            .getParameters()
            .forEach(parameter => parameter.ignore())
    }

    handleTrackSelectButtons(isPressed: boolean, buttonIndex: number) {
        if (!isPressed) {
            return
        }

        this.ignore()
        this.getRack()?.setActiveMixerPage(buttonIndex)
        this.observe()
    }

    handleTrackStateButtons(isPressed: boolean, buttonIndex: number) {
        if (!isPressed) {
            return
        }

        const muteParameter = this.getRack()
            ?.getChains()
            [buttonIndex].getMuteParameter()

        muteParameter?.setValue(muteParameter.getValue() ? 0 : 1)

        //todo: are these update displays needed? as a value was updated
        this.updateDisplay()
    }

    executePageLevelCommand(targetCommand: Command) {
        const page = this.getRack()?.getActiveMixerPage()
        targetCommand === command.DEFAULT ? page?.default() : page?.random()

        this.updateDisplay()
    }

    executeParamLevelCommand(targetCommand: Command, encoderIndex: number) {
        const param = this.getRack()
            ?.getActiveMixerPage()
            .getParameter(encoderIndex)
        targetCommand === command.DEFAULT ? param?.default() : param?.random()

        this.updateDisplay()
    }

    sendValue(value: number, encoderIndex: number) {
        this.getRack()
            ?.getActiveMixerPage()
            .getParameter(encoderIndex)
            .sendValue(value)

        this.updateDisplay()
    }

    updateDisplay() {
        const rack = this.getRack()

        if (!rack) {
            this.displayBlank()
            return
        }
        const mutableChains = rack.getChains() as Mutable[]
        const chainOnStates = mutableChains.map(chain => (chain.getMuteParameter().getValue() ? 0 : 1))

        const displayValues = rack
            .getActiveMixerPage()
            .getParameters()
            .map((parameter, index) => (chainOnStates[index] ? parameter.getDisplayValue() : ''))

        const mixerPage = rack.getActiveMixerPage()

        const mixerPageNames = rack.getMixerPages().map(page => page.getName())

        const chainNames = (rack.getChains() as (DrumPad | InstrumentChain)[]).map(chain => chain.getName()).slice(0, 8)

        this.controlSurface.display.line(0, chainNames)
        this.controlSurface.display.line(1, displayValues)
        this.controlSurface.display.title(2, [this.getTitle()])
        this.controlSurface.display.menu(3, mixerPageNames, mixerPage.getIndex())
        this.controlSurface.trackSelect.map(mixerPageNames.length, mixerPage.getIndex())
        this.controlSurface.trackState.map(chainOnStates)
    }
}

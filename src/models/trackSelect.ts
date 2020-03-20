import ControlName from '~/constants/controlName'
import SelectButtonColour from '~/constants/selectButtonColour'

export class TrackSelect {
    buttonApi: LiveAPI[]

    constructor(getControl: (controlName: ControlName) => string) {
        this.buttonApi = [
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_0)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_1)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_2)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_3)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_4)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_5)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_6)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_SELECT_BUTTON_7)),
        ]
    }

    map(itemsCount: number, activeItemIndex: number, specifiedColour = SelectButtonColour.YELLOW) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? SelectButtonColour.BLACK : i == activeItemIndex ? specifiedColour + 3 : specifiedColour

            this.buttonApi[i].call('send_value', buttonValue.toString())
        }
    }
}

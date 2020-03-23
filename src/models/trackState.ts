import ControlName from '~/constants/controlName'
import StateButtonColour from '~/constants/stateButtonColour'

export class TrackState {
    buttonApi: LiveAPI[]

    constructor(getControl: (controlName: ControlName) => string) {
        this.buttonApi = [
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_0)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_1)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_2)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_3)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_4)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_5)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_6)),
            new LiveAPI(() => {}, getControl(ControlName.TRACK_STATE_BUTTON_7)),
        ]
    }

    map(itemStates: number[]) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemStates.length ? StateButtonColour.BLACK : itemStates[i] ? StateButtonColour.YELLOW_BRIGHT : StateButtonColour.YELLOW_DIM

            this.buttonApi[i].call('send_value', buttonValue)
        }
    }
}

/* eslint-disable */

import stateButtonColour from '../constants/stateButtonColour'

export function TrackState(getControl) {
    this.buttonApi = [
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button0')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button1')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button2')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button3')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button4')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button5')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button6')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button7')),
    ]

    this.map = function(itemStates) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemStates.length ? stateButtonColour.BLACK : itemStates[i] ? stateButtonColour.YELLOW_BRIGHT : stateButtonColour.YELLOW_DIM

            this.buttonApi[i].call('send_value', buttonValue)
        }
    }
}

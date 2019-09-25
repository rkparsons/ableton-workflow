const constants = require('constants')

exports.TrackState = function(getControl) {
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

    this.map = function(itemsCount, activeItemIndex) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? constants.stateButtonColour.BLACK : i == activeItemIndex ? constants.stateButtonColour.BLUE_BRIGHT : constants.stateButtonColour.BLUE_DIM

            this.buttonApi[i].call('send_value', buttonValue)
        }
    }
}

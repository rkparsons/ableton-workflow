import selectButtonColour from '../constants/selectButtonColour'

export function TrackSelect(getControl) {
    this.buttonApi = [
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button0')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button1')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button2')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button3')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button4')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button5')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button6')),
        new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button7')),
    ]

    this.map = function(itemsCount, activeItemIndex, specifiedColour) {
        const colour = specifiedColour || selectButtonColour.YELLOW

        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? selectButtonColour.BLACK : i == activeItemIndex ? colour + 3 : colour

            this.buttonApi[i].call('send_value', buttonValue)
        }
    }
}
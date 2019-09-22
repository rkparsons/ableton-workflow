const constants = require('constants')

exports.ControlSurface = function(onOffControlName) {
    this.onOffControlName = onOffControlName
    this.controlSurfaceApi = new LiveAPI('control_surfaces 0')

    this.displayApi = []
    this.trackSelectButtonApi = []
    this.trackStateButtonApi = []

    //todo: replace hardcoded control names with constants
    this.displayApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_0'))
    this.displayApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_1'))
    this.displayApi[2] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_2'))
    this.displayApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Display_Line_3'))

    this.trackSelectButtonApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button0'))
    this.trackSelectButtonApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button1'))
    this.trackSelectButtonApi[2] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button2'))
    this.trackSelectButtonApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button3'))
    this.trackSelectButtonApi[4] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button4'))
    this.trackSelectButtonApi[5] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button5'))
    this.trackSelectButtonApi[6] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button6'))
    this.trackSelectButtonApi[7] = new LiveAPI(function() {}, getControl.call(this, 'Track_Select_Button7'))

    this.trackStateButtonApi[0] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button0'))
    this.trackStateButtonApi[1] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button1'))
    this.trackStateButtonApi[2] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button2'))
    this.trackStateButtonApi[3] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button3'))
    this.trackStateButtonApi[4] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button4'))
    this.trackStateButtonApi[5] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button5'))
    this.trackStateButtonApi[6] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button6'))
    this.trackStateButtonApi[7] = new LiveAPI(function() {}, getControl.call(this, 'Track_State_Button7'))

    this.activate = function() {
        for (var i in constants.pushControls) {
            const control = this.controlSurfaceApi.call('get_control_by_name', [constants.pushControls[i]])
            this.controlSurfaceApi.call('grab_control', control)
        }
    }

    this.deactivate = function() {
        for (var i in constants.pushControls) {
            if (constants.pushControls[i] !== this.onOffControlName) {
                const control = this.controlSurfaceApi.call('get_control_by_name', [constants.pushControls[i]])
                this.controlSurfaceApi.call('release_control', control)
            }
        }
    }

    this.display = function(lineIndex, values) {
        this.displayApi[lineIndex].call('display_message', values.length === 1 ? values : createDisplayMessage.call(this, values))
    }

    this.trackSelect = function(itemsCount, activeItemIndex) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? constants.selectButtonColour.BLACK : i == activeItemIndex ? constants.selectButtonColour.GREEN_BRIGHT : constants.selectButtonColour.GREEN_DIM

            this.trackSelectButtonApi[i].call('send_value', buttonValue)
        }
    }

    this.trackState = function(itemsCount, activeItemIndex) {
        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= itemsCount ? constants.stateButtonColour.BLACK : i == activeItemIndex ? constants.stateButtonColour.BLUE_BRIGHT : constants.stateButtonColour.BLUE_DIM

            this.trackStateButtonApi[i].call('send_value', buttonValue)
        }
    }

    this.on = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'
    }

    function getControl(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }

    function createDisplayMessage(messageItems) {
        const paddingEnd = '        '
        var itemsPadded = ''

        for (i in messageItems) {
            itemsPadded += (messageItems[i] + paddingEnd).slice(0, 8)
            itemsPadded += i % 2 === 0 ? ' ' : ''
        }

        return itemsPadded
    }
}

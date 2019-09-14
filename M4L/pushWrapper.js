const controlNames = require('push').controlNames

exports.push = function() {
    return new Push()
}

function Push() {
    this.controls = []
    this.displayApi = []
    this.controlSurfaceApi = undefined
    this.sceneLaunchButtonsApi = undefined
    this.isActive = false

    this.initialise = function() {
        this.controlSurfaceApi = new LiveAPI('control_surfaces 0')
        this.getControls()
        this.displayApi[0] = new LiveAPI(function() {}, this.getControlApi('Display_Line_0'))
        this.displayApi[1] = new LiveAPI(function() {}, this.getControlApi('Display_Line_1'))
        this.displayApi[2] = new LiveAPI(function() {}, this.getControlApi('Display_Line_2'))
        this.displayApi[3] = new LiveAPI(function() {}, this.getControlApi('Display_Line_3'))
    }

    this.toggleActive = function() {
        this.isActive ? this.releaseControls() : this.grabControls()
    }

    this.onTapTempoButtonPressed = function(callback) {
        this.observeControl('Tap_Tempo_Button', callback)
    }

    this.onSceneLaunchButtonPressed = function(callback) {
        this.sceneLaunchButtonsApi = this.observeControl('Scene_Launch_Buttons', callback)
    }

    this.observeControl = function(controlName, callback) {
        const control = this.controlSurfaceApi.call('get_control_by_name', controlName)
        const controlApi = new LiveAPI(callback, control)
        controlApi.property = 'value'

        return controlApi
    }

    this.getControlApi = function(controlName) {
        return this.controlSurfaceApi.call('get_control_by_name', [controlName])
    }

    this.getDrumPadNameById = function(id) {
        // possibly cache id-name mapping, or being able to move drum pad might be useful
        return new LiveAPI(null, 'id ' + id).get('name')
    }

    this.getControls = function() {
        for (var i in controlNames) {
            this.controls.push(this.controlSurfaceApi.call('get_control_by_name', controlNames[i]))
        }
    }

    this.grabControls = function() {
        utilities.log('grabControls')
        this.isActive = true

        this.enableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('grab_control', this.controls[i])
        }
    }

    this.releaseControls = function() {
        utilities.log('releaseControls')
        this.isActive = false

        this.disableObservers()

        for (var i in this.controls) {
            this.controlSurfaceApi.call('release_control', this.controls[i])
        }
    }

    this.enableObservers = function() {
        this.sceneLaunchButtonsApi.property = 'value'
    }

    this.disableObservers = function() {
        this.sceneLaunchButtonsApi.property = ''
    }

    this.displayValuesOnLine = function(lineIndex, values) {
        this.displayApi[lineIndex].call('display_message', this.createDisplayMessage(values))
    }

    this.createDisplayMessage = function(values) {
        var padding = '        '
        var itemsPadded = []

        for (i in values) {
            var length = 8 - (i % 2)

            itemsPadded.push(('  ' + values[i] + padding).slice(0, length))
        }

        return itemsPadded
    }
}

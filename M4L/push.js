deviceIds = []
mode = 'layer'
var subPageDecimal = null
var deviceId = null
var appointedDeviceId = null
var metronomeButtonApi = null
var appointedDeviceApi = null
var controlSurfaceApi = null
var trackSelectButtonsApi = null
var trackStateButtonsApi = null
var trackControlTouchApis = []
var masterVolumeControlApi = null
var displayLine2Api = null
var displayLine3Api = null
var trackSelectButtonApis = []
var trackStateButtonApis = []
var metronomeButton = {}
var trackSelectButtons = {}
var trackStateButtons = {}
var displayLine2 = {}
var displayLine3 = {}
var trackControlTouches = []
var masterVolumeControl = {}

exports.initialise = function() {
    initialisePushApis()
    observeMetronomeButton()
    observeTrackControlTouches()
    observeMasterVolumeControl()
    observeTrackSelectButtons()
    observeTrackStateButtons()
    observeAppointedDevice()
    utilities.setTimeout(initialiseAppointedDevice, 0)
}

function initialiseAppointedDevice() {
    if (deviceId == appointedDeviceId) {
        subPageDecimal = getSubPageIndex()
        metronomeButtonApi.property = 'value'
        masterVolumeControlApi.property = 'value'
        trackSelectButtonsApi.property = 'value'
        trackStateButtonsApi.property = 'value'
        trackControlTouchApis.forEach(function(x) {
            x.property = 'value'
        })

        grabControls()
        updateDisplayLine2()
        updateDisplayLine3()
        updateTrackSelectButtons()
        updateTrackStateButtons()
    }
}

function initialisePushApis() {
    deviceId = new LiveAPI('this_device').id
    deviceIds.push(deviceId)
    appointedDeviceId = new LiveAPI('live_set').get('appointed_device')[1]
    controlSurfaceApi = new LiveAPI('control_surfaces 0')
    masterVolumeControl = controlSurfaceApi.call('get_control_by_name', ['Master_Volume_Control'])

    initialiseDisplay()
    initialiseTrackControlTouches()
    initialiseTrackSelectButtons()
    initialiseTrackStateButtons()
}

function initialiseDisplay() {
    displayLine2 = controlSurfaceApi.call('get_control_by_name', ['Display_Line_2'])
    displayLine3 = controlSurfaceApi.call('get_control_by_name', ['Display_Line_3'])
    displayLine2Api = new LiveAPI(function() {}, displayLine2)
    displayLine3Api = new LiveAPI(function() {}, displayLine3)
}

function initialiseTrackControlTouches() {
    for (var i = 0; i < 8; i++) {
        trackControlTouch = controlSurfaceApi.call('get_control_by_name', ['Track_Control_Touch_' + i])
        trackControlTouches.push(trackControlTouch)
    }
}

function initialiseTrackSelectButtons() {
    trackSelectButtons = controlSurfaceApi.call('get_control_by_name', ['Track_Select_Buttons'])

    for (var i = 0; i < 8; i++) {
        var trackSelectButton = controlSurfaceApi.call('get_control_by_name', 'Track_Select_Button' + i)
        var trackSelectButtonApi = new LiveAPI(function() {}, trackSelectButton)
        trackSelectButtonApis.push(trackSelectButtonApi)
    }
}

function initialiseTrackStateButtons() {
    trackStateButtons = controlSurfaceApi.call('get_control_by_name', ['Track_State_Buttons'])

    for (var i = 0; i < 8; i++) {
        var trackStateButton = controlSurfaceApi.call('get_control_by_name', 'Track_State_Button' + i)
        var trackStateButtonApi = new LiveAPI(function() {}, trackStateButton)
        trackStateButtonApis.push(trackStateButtonApi)
    }
}

function observeAppointedDevice() {
    appointedDeviceApi = new LiveAPI(onAppointedDeviceEvent)
    appointedDeviceApi.path = 'live_set'
    appointedDeviceApi.property = 'appointed_device'
}

function observeMetronomeButton() {
    metronomeButton = controlSurfaceApi.call('get_control_by_name', 'Metronome_Button')
    metronomeButtonApi = new LiveAPI(onMetronomeButtonEvent, metronomeButton)
    metronomeButtonApi.property = 'value'
}

function observeTrackControlTouches() {
    for (var i in trackControlTouches) {
        trackControlTouchApi = new LiveAPI(onTrackControlTouchEvent, trackControlTouches[i])
        trackControlTouchApi.property = 'value'

        trackControlTouchApis.push(trackControlTouchApi)
    }
}

function observeMasterVolumeControl() {
    masterVolumeControlApi = new LiveAPI(onMasterVolumeControlEvent, masterVolumeControl)
    masterVolumeControlApi.property = 'value'
}

function observeTrackSelectButtons() {
    trackSelectButtonsApi = new LiveAPI(onTrackSelectButtonsEvent, trackSelectButtons)
    trackSelectButtonsApi.property = 'value'
}

function observeTrackStateButtons() {
    trackStateButtonsApi = new LiveAPI(onTrackStateButtonsEvent, trackStateButtons)
    trackStateButtonsApi.property = 'value'
}

function isExitingDevice() {
    for (var i = 0; i < deviceIds.length; i++) {
        if (deviceIds[i] == appointedDeviceId) {
            return false
        }
    }

    return true
}

function onAppointedDeviceEvent(args) {
    if (args[0] !== 'appointed_device') {
        return
    }
    clearObservers()
    appointedDeviceId = parseInt(args[2])

    initialiseAppointedDevice()

    if (isExitingDevice()) {
        releaseControls()
    }
}

function clearObservers() {
    trackControlTouchApis.forEach(function(x) {
        x.property = ''
    })
    metronomeButtonApi.property = ''
    masterVolumeControlApi.property = ''
    trackSelectButtonsApi.property = ''
    trackStateButtonsApi.property = ''
}

function onMetronomeButtonEvent(args) {
    if (args[0] !== 'value' || args[1] !== 127) {
        return
    }

    mode = mode === 'subPage' ? 'layer' : 'subPage'

    updateDisplayLine2()
    updateDisplayLine3()
    updateTrackSelectButtons()
    updateTrackStateButtons()
}

function onTrackControlTouchEvent(args) {
    if (args[0] !== 'value' || typeof args[1] !== 'number') {
        return
    }

    mode = 'subPage'
    updateDisplayLine2()
    updateDisplayLine3()
    updateTrackSelectButtons()
    updateTrackStateButtons()
}

function onMasterVolumeControlEvent(args) {
    if (args[0] !== 'value' || typeof args[1] !== 'number') {
        return
    }

    var subPageIndex = getSubPageIndexFromVolumeControl(args[1])

    setSubPage(getSubPageName(subPageIndex), activeLayer)
    updateDisplayLine3()
    updateTrackSelectButtons()
    updateTrackStateButtons()
}

function getSubPageIndexFromVolumeControl(delta) {
    subPageDecimal += (delta < 50 ? delta : delta - 128) / 10
    subPageDecimal = Math.max(0, subPageDecimal)
    subPageDecimal = Math.min(getSubPagesCount() - 1, subPageDecimal)
    var subPageIndex = Math.floor(subPageDecimal)
    return subPageIndex
}

function onTrackSelectButtonsEvent(args) {
    var isPressed = args[1] == 127
    var buttonIndex = parseInt(args[2])

    if (!isPressed) {
        return
    }

    if (mode === 'layer') {
        setLayer(Object.keys(activeVoice)[buttonIndex])
    } else {
        setSubPage(getSubPageName(buttonIndex + 1), activeLayer)
    }
    updateTrackSelectButtons()
    updateDisplayLine3()
}

function onTrackStateButtonsEvent(args) {
    if (mode === 'subPage') {
        return
    }

    var isPressed = args[1] == 127
    var layerIndex = parseInt(args[2])

    if (isPressed) {
        var layerName = getLayerName(layerIndex)
        var isOn = activeVoice[layerName].activePage === 'Off'

        setValue(layerName, constants.muteName, isOn ? 0 : 1)
        updateTrackStateButton(layerIndex, isOn)

        subPageDecimal = isOn ? 0 : 1
    }
}

function updateTrackSelectButtons() {
    if (mode === 'layer') {
        var buttonCount = Object.keys(activeVoice).length

        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= buttonCount ? 0 : i == activeVoice[activeLayer].index ? 19 : 13
            trackSelectButtonApis[i].call('send_value', buttonValue)
        }
    } else if (mode === 'subPage') {
        var selectedButtonIndex = getSubPageIndex() - 1
        var buttonCount = getSubPagesCount() - 1

        for (var i = 0; i < 8; i++) {
            var buttonValue = i >= buttonCount ? 0 : i == selectedButtonIndex ? 4 : 1
            trackSelectButtonApis[i].call('send_value', buttonValue)
        }
    }
}

function updateTrackStateButtons() {
    if (mode === 'layer') {
        for (var i = 0; i < 8; i++) {
            var layerName = getLayerName(i)
            var isOn = layerName && activeVoice[layerName].activePage !== 'Off'
            updateTrackStateButton(i, isOn)
        }
    } else if (mode === 'subPage') {
        for (var i = 0; i < 8; i++) {
            trackStateButtonApis[i].call('send_value', 0)
        }
    }
}

function updateTrackStateButton(buttonIndex, isOn) {
    var buttonCount = Object.keys(activeVoice).length
    var buttonValue = buttonIndex >= buttonCount ? 0 : isOn ? 13 : 15

    trackStateButtonApis[buttonIndex].call('send_value', buttonValue)
}

function updateDisplayLine2() {}

function updateDisplayLine3() {
    if (mode === 'layer') {
        var layerNames = Object.keys(activeVoice)
        var menuItems = getDisplayMenuItems(layerNames, activeLayer)

        displayLine3Api.call('display_message', menuItems)
    } else if (mode === 'subPage') {
        var pageNames = getPageNames().slice(1)
        var activePage = activeVoice[activeLayer].activePage
        var menuItems = getDisplayMenuItems(pageNames, activePage)

        displayLine3Api.call('display_message', menuItems)
    }
}

function getDisplayMenuItems(items, selectedItem) {
    var padding = '        '
    var itemsPadded = []

    for (var i = 0; i < 8; i++) {
        var length = 8 - (i % 2)
        var item = items[i] || ''

        if (item === selectedItem) {
            item = '>' + item
        }

        itemsPadded.push((item + padding).slice(0, length))
    }

    return itemsPadded
}

function grabControls() {
    controlSurfaceApi.call('grab_control', metronomeButton)
    controlSurfaceApi.call('grab_control', masterVolumeControl)
    controlSurfaceApi.call('grab_control', displayLine2)
    controlSurfaceApi.call('grab_control', displayLine3)
    controlSurfaceApi.call('grab_control', trackSelectButtons)
    controlSurfaceApi.call('grab_control', trackStateButtons)
}

function releaseControls() {
    controlSurfaceApi.call('release_control', metronomeButton)
    controlSurfaceApi.call('release_control', masterVolumeControl)
    controlSurfaceApi.call('release_control', displayLine2)
    controlSurfaceApi.call('release_control', displayLine3)
    controlSurfaceApi.call('release_control', trackSelectButtons)
    controlSurfaceApi.call('release_control', trackStateButtons)
}

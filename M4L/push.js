deviceIds = []
var deviceId = null
var appointedDeviceId = null
var metronomeButtonApi = null
var deviceButtonApi = null
var trackButtonApi = null
var appointedDeviceApi = null
var controlSurfaceApi = null
var trackSelectButtonsApi = null
var trackStateButtonsApi = null
var displayLine0Api = null
var displayLine2Api = null
var displayLine3Api = null
var trackSelectButtonApis = []
var trackStateButtonApis = []
var metronomeButton = {}
var deviceButton = {}
var trackButton = {}
var trackSelectButtons = {}
var trackStateButtons = {}
var displayLine0 = {}
var displayLine2 = {}
var displayLine3 = {}

exports.initialise = function() {
    initialisePushApis()
    observeTrackButton()
    observeDeviceButton()
    observeMetronomeButton()
    observeTrackSelectButtons()
    observeTrackStateButtons()
    observeAppointedDevice()
    utilities.setTimeout(initialiseAppointedDevice, 0)
}

function initialiseAppointedDevice() {
    if (deviceId == appointedDeviceId) {
        subPageDecimal = getSubPageIndex()
        trackButtonApi.property = 'value'
        deviceButtonApi.property = 'value'
        metronomeButtonApi.property = 'value'
        trackSelectButtonsApi.property = 'value'
        trackStateButtonsApi.property = 'value'

        updateControlSurface()
    }
}

function initialisePushApis() {
    deviceId = new LiveAPI('this_device').id
    deviceIds.push(deviceId)
    appointedDeviceId = new LiveAPI('live_set').get('appointed_device')[1]
    controlSurfaceApi = new LiveAPI('control_surfaces 0')

    initialiseDisplay()
    initialiseTrackSelectButtons()
    initialiseTrackStateButtons()
}

function initialiseDisplay() {
    displayLine0 = controlSurfaceApi.call('get_control_by_name', ['Display_Line_0'])
    displayLine2 = controlSurfaceApi.call('get_control_by_name', ['Display_Line_2'])
    displayLine3 = controlSurfaceApi.call('get_control_by_name', ['Display_Line_3'])
    displayLine0Api = new LiveAPI(function() {}, displayLine0)
    displayLine2Api = new LiveAPI(function() {}, displayLine2)
    displayLine3Api = new LiveAPI(function() {}, displayLine3)
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

function observeTrackButton() {
    trackButton = controlSurfaceApi.call('get_control_by_name', 'Single_Track_Mode_Button')
    trackButtonApi = new LiveAPI(onTrackButtonEvent, trackButton)
    trackButtonApi.property = 'value'
}

function observeDeviceButton() {
    deviceButton = controlSurfaceApi.call('get_control_by_name', 'Device_Mode_Button')
    deviceButtonApi = new LiveAPI(onDeviceButtonEvent, deviceButton)
    deviceButtonApi.property = 'value'
}

function observeMetronomeButton() {
    metronomeButton = controlSurfaceApi.call('get_control_by_name', 'Metronome_Button')
    metronomeButtonApi = new LiveAPI(onMetronomeButtonEvent, metronomeButton)
    metronomeButtonApi.property = 'value'
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
    trackButtonApi.property = ''
    deviceButtonApi.property = ''
    metronomeButtonApi.property = ''
    trackSelectButtonsApi.property = ''
    trackStateButtonsApi.property = ''
}

function onTrackButtonEvent(args) {
    if (args[0] !== 'value' || args[1] !== 127) {
        return
    }

    mode = constants.mode.VOICE_MIXER

    updateControlSurface()
}

function onDeviceButtonEvent(args) {
    if (args[0] !== 'value' || args[1] !== 127) {
        return
    }

    mode = constants.mode.LAYER_DEVICE

    updateControlSurface()
}

function onMetronomeButtonEvent(args) {}

function onTrackSelectButtonsEvent(args) {
    if (args[0] !== 'value' || args[1] !== 127) {
        return
    }

    if (mode === constants.mode.VOICE_MIXER || mode === constants.mode.LAYER_DEVICE) {
        var buttonIndex = parseInt(args[2])
        setLayer(Object.keys(activeVoice)[buttonIndex])
        mode = constants.mode.LAYER_DEVICE
        updateControlSurface()
    }
}

function onTrackStateButtonsEvent(args) {
    if (args[0] !== 'value' || args[1] !== 127) {
        return
    }

    var buttonIndex = parseInt(args[2])

    if (mode === constants.mode.VOICE_MIXER) {
        var layerName = getLayerName(buttonIndex)
        var isOn = activeVoice[layerName].activePage === 'Off'

        setValue(layerName, constants.muteName, isOn ? 0 : 1)
        updateTrackStateButtons(buttonIndex, isOn)
    } else if (mode === constants.mode.LAYER_DEVICE) {
        setSubPage(getSubPageName(buttonIndex + 1), activeLayer)
        updateTrackStateButtons(buttonIndex)
        updateDisplayLine3()
    }
}

function updateControlSurface() {
    grabControls()
    updateLiveBanks()
    updateDisplayLine0()
    updateDisplayLine2()
    updateDisplayLine3()
    updateTrackSelectButtons()
    updateTrackStateButtons()
}

function updateDisplayLine0() {
    releaseControl(displayLine0)
}

function updateDisplayLine2() {
    if (mode === constants.mode.VOICE_MIXER || mode === constants.mode.LAYER_DEVICE) {
        displayLayerSelect(displayLine2Api)
    } else {
        displayBlank(displayLine2Api)
    }
}

function updateDisplayLine3() {
    if (mode === constants.mode.VOICE_MIXER) {
        displayActiveVoice(displayLine3Api)
    } else if (mode === constants.mode.LAYER_DEVICE) {
        displayLayerParamSelect(displayLine3Api)
    } else {
        displayBlank(displayLine3Api)
    }
}

function updateTrackSelectButtons() {
    if (mode === constants.mode.VOICE_MIXER || mode === constants.mode.LAYER_DEVICE) {
        mapButtonsToLayerSelect(trackSelectButtonApis, constants.selectButtonColour.BLACK, constants.selectButtonColour.GREEN_DIM, constants.selectButtonColour.GREEN_BRIGHT)
    } else {
        mapButtonsToBlank(trackSelectButtonApis)
    }
}

function updateTrackStateButtons(updatedIndex, isOn) {
    if (mode === constants.mode.VOICE_MIXER) {
        mapButtonsToLayerToggle(trackStateButtonApis, updatedIndex, isOn)
    } else if (mode === constants.mode.LAYER_DEVICE) {
        mapButtonsToLayerParamSelect(trackStateButtonApis, constants.stateButtonColour.BLACK, constants.stateButtonColour.BLUE_DIM, constants.stateButtonColour.BLUE_BRIGHT, updatedIndex)
    } else {
        mapButtonsToBlank(trackStateButtonApis)
    }
}

function mapButtonsToLayerSelect(buttonApis, colourOff, colourInactive, colourActive) {
    var buttonCount = Object.keys(activeVoice).length

    for (var i = 0; i < 8; i++) {
        var buttonValue = i >= buttonCount ? colourOff : i == activeVoice[activeLayer].index ? colourActive : colourInactive
        buttonApis[i].call('send_value', buttonValue)
    }
}

function mapButtonsToLayerToggle(buttonApis, updatedIndex, updatedValue) {
    for (var i = 0; i < 8; i++) {
        var layerName = getLayerName(i)
        var isOn = i === updatedIndex ? updatedValue : layerName && activeVoice[layerName].activePage !== 'Off'
        var buttonCount = Object.keys(activeVoice).length
        var buttonValue = i >= buttonCount ? 0 : isOn ? 13 : 15

        buttonApis[i].call('send_value', buttonValue)
    }
}

function mapButtonsToLayerParamSelect(buttonApis, colourOff, colourInactive, colourActive, updatedIndex) {
    var selectedButtonIndex = updatedIndex || getSubPageIndex() - 1
    var buttonCount = getSubPagesCount() - 1

    for (var i = 0; i < 8; i++) {
        var buttonValue = i >= buttonCount ? colourOff : i == selectedButtonIndex ? colourActive : colourInactive
        buttonApis[i].call('send_value', buttonValue)
    }
}

function mapButtonsToBlank(buttonApis) {
    for (var i = 0; i < 8; i++) {
        buttonApis[i].call('send_value', 0)
    }
}

function displayLayerSelect(displayApi) {
    var layerNames = Object.keys(activeVoice)
    var menuItems = getDisplayMenuItems(layerNames, activeLayer)

    displayApi.call('display_message', menuItems)
}

function displayActiveVoice(displayApi) {
    displayApi.call('display_message', activeVoiceName)
}

function displayActiveLayer(displayApi) {
    displayApi.call('display_message', activeLayer)
}

function displayLayerParamSelect(displayApi) {
    var pageNames = getPageNames().slice(1)
    var menuItems = getDisplayMenuItems(pageNames, activeVoice[activeLayer].activePage)

    displayApi.call('display_message', menuItems)
}

function displayBlank(displayApi) {
    displayApi.call('display_message', ' ')
}

function getDisplayMenuItems(items, selectedItem) {
    var padding = '        '
    var itemsPadded = []

    for (var i = 0; i < 8; i++) {
        var length = 8 - (i % 2)
        var item = items[i] || ''

        if (selectedItem && selectedItem === item) {
            item = '>' + item
        }

        itemsPadded.push((item + padding).slice(0, length))
    }

    return itemsPadded
}

function grabControl(control) {
    controlSurfaceApi.call('grab_control', control)
}

function releaseControl(control) {
    controlSurfaceApi.call('release_control', control)
}

function grabControls() {
    grabControl(trackButton)
    grabControl(deviceButton)
    grabControl(metronomeButton)
    grabControl(displayLine0)
    grabControl(displayLine2)
    grabControl(displayLine3)
    grabControl(trackSelectButtons)
    grabControl(trackStateButtons)
}

function releaseControls() {
    releaseControl(trackButton)
    releaseControl(deviceButton)
    releaseControl(metronomeButton)
    releaseControl(displayLine0)
    releaseControl(displayLine2)
    releaseControl(displayLine3)
    releaseControl(trackSelectButtons)
    releaseControl(trackStateButtons)
}

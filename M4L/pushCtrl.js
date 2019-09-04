autowatch = 1
inlets = 1
outlets = 1

var activeVoiceName = jsarguments[1]
var activeLayer = ''
var previousActiveLayer = ''
var isDeviceEnabled = false
var isSoloFocus = false

var constants = require('constants')
var objects = require('objects')
var devices = require('devices')
var push = require('push')
var utilities = require('utilities')
var properties = require('properties')
var macroLayouts = require('macroLayouts')
var activeVoice = require('voice_' + activeVoiceName).voice

// public functions

function reload() {
    initObjects()
    initLiveApi()
}

function initObjects() {
    objects.initialise(this.patcher, activeVoice, properties)
    log('initialising ' + activeVoiceName)
}

function initLiveApi() {
    devices.initialise()
    push.initialise()
    setLayerSolo()
    initBanks()

    utilities.log(activeVoiceName, 'initialising...done.')
}

function setEnabled(value) {
    isDeviceEnabled = value == 1

    if (devices.isInitialised()) {
        toggleActivePage()
        devices.toggle(isDeviceEnabled)
    }
}

function setPreview(value) {
    devices.setPreview(value)
}

function setSoloFocus(value) {
    isSoloFocus = value
}

function setLayer(layerName) {
    activeLayer = layerName

    setLayerSolo()

    initBanks()
}

function log(message) {
    var file = new File('C:/Code/ableton-workflow/M4L/logs/' + activeVoiceName + '.txt', 'write', 'TEXT')

    file.position = file.eof
    file.writeline(new Date() + ': ' + message)
    file.close()
}

function setValue(layerName, propertyName, value) {
    if (!devices.isInitialised()) {
        return
    }

    if (propertyName === constants.subPageName) {
        setSubPage(value, layerName)
        return
    }

    if (propertyName === constants.sampleTypeName) {
        var layer = activeVoice[layerName]
        var inputName = constants.chainSelectName + '[' + layer.index + ']' + '[' + layer.activeSampleTypeIndex + ']'

        objects.messageLayerInput(layerName, inputName, 0)
    }

    devices.sendValue(layerName, propertyName, value)
}

// private functions

function toggleActivePage() {
    if (isDeviceEnabled) {
        objects.messagePageInput(activeVoice[previousActiveLayer].index)
    } else {
        previousActiveLayer = activeLayer
        objects.messagePageInput(0)
    }
}

function setLayerSolo() {
    for (var layerName in activeVoice) {
        var layer = activeVoice[layerName]
        if (layer.index) {
            var isSolo = layerName === activeLayer && isDeviceEnabled && isSoloFocus ? 1 : 0
            setValue(layerName, 'solo', isSolo)
        }
    }
}

function setSubPage(subPage, layerName) {
    var isMuted = subPage === constants.offPageName ? 1 : 0
    var layer = activeVoice[layerName]
    layer.activePage = subPage

    if (layer.index) {
        setValue(layerName, constants.muteName, isMuted)
    }

    if (layerName === activeLayer) {
        initBanks()
    }
}

function initBanks() {
    if (devices.isInitialised()) {
        objects.messageBanks(getBanksMessage())
    }
}

function getBanksMessage() {
    var banksMessage = ['edit', 0, 'Global']
    var layer = activeVoice[activeLayer]
    var macros = getLayerMacros(layer)

    for (var i = 0; i < 8; i++) {
        banksMessage.push(i, getMacroString(layer, macros[i]))
    }

    return banksMessage
}

function getLayerMacros(layer) {
    var pages = macroLayouts[layer.macroLayout]

    for (var i in pages) {
        if (!layer.activePage || pages[i].name === layer.activePage) {
            return pages[i].macros
        }
    }
}

function getLayerName(layerIndex) {
    for (var layerName in activeVoice) {
        if (activeVoice[layerName].index == layerIndex) {
            return layerName
        }
    }

    return null
}

function getPageNames() {
    var pages = macroLayouts[activeVoice[activeLayer].macroLayout]
    var pageNames = []

    for (var i in pages) {
        pageNames.push(pages[i].name)
    }

    return pageNames
}

function getSubPageIndex() {
    var layer = activeVoice[activeLayer]
    var pages = macroLayouts[layer.macroLayout]

    for (var i = 0; i < pages.length; i++) {
        if (pages[i].name === layer.activePage) {
            return i
        }
    }

    return 0
}

function getSubPageName(subPageIndex) {
    var pages = macroLayouts[activeVoice[activeLayer].macroLayout]
    var page = subPageIndex >= pages.length ? pages[pages.length - 1] : pages[subPageIndex]

    return page.name
}

function getSubPagesCount() {
    var pages = macroLayouts[activeVoice[activeLayer].macroLayout]

    return pages.length
}

function getMacroString(layer, macroName) {
    var isGlobalMacro = !layer.index || macroName === 'page'
    var macroSuffix = !isGlobalMacro ? '[' + layer.index + ']' : ''

    if (macroName === constants.chainSelectName) {
        macroSuffix += '[' + layer.activeSampleTypeIndex + ']'
    }

    return !macroName ? '-' : macroName + macroSuffix
}

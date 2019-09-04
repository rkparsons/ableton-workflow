var pageInput = {}
var pcontrol = {}
var subpatchers = {}
var thispatcher = {}
var inputsSubpatcher = {}
var properties = {}

exports.initialise = function(patcher, voice, props) {
    thispatcher = patcher
    inputsSubpatcher = thispatcher.getnamed('inputs').subpatcher()
    properties = props

    clearInputs()
    initPatcherControl()
    initPageInput(voice)
    initPropertyInputs(voice)
    initNoteInOut()
    initLiveBanks()
    closeSubpatchers()
}

exports.messagePageInput = function(index) {
    pageInput.message(index)
}

exports.messageLayerInput = function(layerName, inputName, value) {
    var input = subpatchers[layerName].subpatcher().getnamed(inputName)
    input.message(value)
}

exports.messageBanks = function(banksMessage) {
    inputsSubpatcher.getnamed('liveBanks').message(banksMessage)
}

exports.syncInputToValue = function(propertyName, layerName, value) {
    var trigName = 'trig[' + propertyName + ']'
    var trig = subpatchers[layerName].subpatcher().getnamed(trigName)

    trig.message(value)
}

function initPropertyInputs(voice) {
    var xPosition = 20
    for (var layerName in voice) {
        initPropertyInputsForLayer(xPosition, layerName, voice[layerName])

        xPosition += 120
    }
}

function initPageInput(voice) {
    var pagesSubpatcher = initSubpatcher('page', 20, 200)

    pageInput = pagesSubpatcher.newdefault(20, 20, 'live.menu')

    connectPageInput(pagesSubpatcher)
    configureInputParameters(pageInput, 'page', '   <>', getLayerPages(voice), constants.unitType.ENUM, null, null)
    configureInputDefaultValue(pageInput, 1)
}

function closeSubpatchers() {
    var patcherControl = inputsSubpatcher.getnamed('patcherControl')

    patcherControl.message('close')
}

function clearInputs() {
    inputsSubpatcher.apply(function(obj) {
        inputsSubpatcher.remove(obj)
    })
}

function initNoteInOut() {
    notein = inputsSubpatcher.newdefault(20, 20, 'notein')
    noteout = inputsSubpatcher.newdefault(20, 50, 'noteout')
    inputsSubpatcher.connect(notein, 0, noteout, 0)
    inputsSubpatcher.connect(notein, 1, noteout, 1)
    inputsSubpatcher.connect(notein, 2, noteout, 2)
}

function initLiveBanks() {
    var liveBanks = inputsSubpatcher.newdefault(140, 20, 'live.banks')
    liveBanks.varname = 'liveBanks'
}

function initPatcherControl() {
    pcontrol = inputsSubpatcher.newdefault(20, 80, 'pcontrol')
    pcontrol.varname = 'patcherControl'
}

function initPropertyInputsForLayer(xPosition, layerName, layer) {
    var subpatchXPosition = 20

    var layerSubpatcher = initSubpatcher(layerName, xPosition, 150)
    var prepend = layerSubpatcher.newdefault(subpatchXPosition, 210, 'prepend', 'setValue', layerName)
    var send = layerSubpatcher.newdefault(subpatchXPosition, 240, 'send', '---setValue')

    layerSubpatcher.connect(prepend, 0, send, 0)

    initPropertyInputsForDevices(subpatchXPosition, layer, layerSubpatcher, prepend)
}

function initPropertyInputsForDevices(subpatchXPosition, layer, layerSubpatcher, prepend) {
    for (var deviceIndex in layer.devices) {
        var deviceName = layer.devices[deviceIndex]

        for (var propertyIndex in properties[deviceName]) {
            initPropertyInputsForDevice(subpatchXPosition, deviceName, propertyIndex, layerSubpatcher, layer, prepend)
            subpatchXPosition += 120
        }
    }
}

function initPropertyInputsForDevice(subpatchXPosition, deviceName, propertyIndex, layerSubpatcher, layer, prepend) {
    var property = properties[deviceName][propertyIndex]
    var trigger = layerSubpatcher.newdefault(subpatchXPosition, 20, 'trigger', 'l')
    trigger.varname = 'trig' + '[' + property.name + ']'

    if (property.name === constants.chainSelectName) {
        initChainSelectInputs(subpatchXPosition, layer, property, layerSubpatcher, trigger, prepend)
    } else {
        initPropertyInput(subpatchXPosition, property, layer, layerSubpatcher, trigger, prepend)
    }
}

function initPropertyInput(subpatchXPosition, property, layer, layerSubpatcher, trigger, prepend) {
    var inputName = property.name + '[' + layer.index + ']'
    var inputRange = getInputRange(layer, property)

    createPropertyInput(subpatchXPosition, property, layerSubpatcher, trigger, prepend, inputName, inputRange)

    subpatchXPosition += 150
}

function initChainSelectInputs(subpatchXPosition, layer, property, layerSubpatcher, trigger, prepend) {
    var sampleTypeIndex = 0
    for (var sampleTypeName in layer.samples) {
        var inputName = property.name + '[' + layer.index + ']' + '[' + sampleTypeIndex + ']'
        var inputRange = getChainSelectInputRange(layer, sampleTypeName)
        createPropertyInput(subpatchXPosition, property, layerSubpatcher, trigger, prepend, inputName, inputRange)
        subpatchXPosition += 150
    }
}

function initSubpatcher(patcherName, xPosition, yPosition) {
    var patcher = inputsSubpatcher.newdefault(xPosition, yPosition, 'p', patcherName)
    subpatchers[patcherName] = patcher
    connectToPatcherControl(patcher)

    return patcher.subpatcher()
}

function createPropertyInput(subpatchXPosition, property, layerSubpatcher, trigger, prependSetValue, inputName, inputRange) {
    var prependSet = layerSubpatcher.newdefault(subpatchXPosition, 90, 'prepend', 'set')
    var input = layerSubpatcher.newdefault(subpatchXPosition, 120, property.inputType || 'live.numbox')
    var prependProperty = layerSubpatcher.newdefault(subpatchXPosition, 180, 'prepend', property.name)

    connectInput(subpatchXPosition, property, layerSubpatcher, trigger, prependSet, input, prependProperty, prependSetValue)
    configureInputParameters(input, inputName, property.displayName, inputRange, property.unitType, property.unitStyle, property.exponent)
}

function connectInput(subpatchXPosition, property, layerSubpatcher, trigger, prependSet, input, prependProperty, prependSetValue) {
    if (property.outputRange) {
        connectInputWithScaledOutput(subpatchXPosition, property, layerSubpatcher, trigger, prependSet, input, prependProperty)
    } else {
        layerSubpatcher.connect(trigger, 0, prependSet, 0)
        layerSubpatcher.connect(input, property.inputOutletIndex || 0, prependProperty, 0)
    }

    layerSubpatcher.connect(prependSet, 0, input, 0)
    layerSubpatcher.connect(prependProperty, 0, prependSetValue, 0)
}

function configureInputParameters(input, inputName, shortName, inputRange, inputUnitType, inputUnitStyle, inputExponent) {
    input.message(['_parameter_linknames', 1])
    input.message(['_parameter_longname', inputName])
    input.message(['varname', inputName])
    input.message(['_parameter_shortname', shortName || ' '])
    input.message(['_parameter_type', inputUnitType])
    input.message(['_parameter_range'].concat(inputRange))
    input.message(['_parameter_exponent', inputExponent || '1.'])

    if (inputUnitStyle) {
        input.message(['_parameter_unitstyle', inputUnitStyle])
    }
}

function configureInputDefaultValue(input, value) {
    input.message(value)
    input.message(['_parameter_initial_enable', value])
    input.message(['_parameter_initial', value])
}

function connectInputWithScaledOutput(subpatchXPosition, property, layerSubpatcher, trigger, prependSet, input, prependProperty) {
    var inFrom = property.inputRange[0]
    var inTo = property.inputRange[1]
    var outFrom = property.outputRange[0]
    var outTo = property.outputRange[1]
    var scaleIn = layerSubpatcher.newdefault(subpatchXPosition, 60, 'scale', outFrom, outTo, inFrom, inTo)
    var scaleOut = layerSubpatcher.newdefault(subpatchXPosition, 150, 'scale', inFrom, inTo, outFrom, outTo)

    layerSubpatcher.connect(trigger, 0, scaleIn, 0)
    layerSubpatcher.connect(scaleIn, 0, prependSet, 0)
    layerSubpatcher.connect(input, 0, scaleOut, 0)
    layerSubpatcher.connect(scaleOut, 0, prependProperty, 0)
}

function connectPageInput(pagesSubpatcher) {
    var sprintf = pagesSubpatcher.newdefault(20, 60, 'sprintf', 'setLayer', '%s')
    var send = pagesSubpatcher.newdefault(20, 100, 'send', '---setValue')
    pagesSubpatcher.newdefault(5, 5, 'inlet')
    pagesSubpatcher.connect(pageInput, 1, sprintf, 0)
    pagesSubpatcher.connect(sprintf, 0, send, 0)
}

function connectToPatcherControl(patcher) {
    patcher.subpatcher().newdefault(5, 5, 'inlet')
    inputsSubpatcher.connect(pcontrol, 0, patcher, 0)
}

function getLayerPages(voice) {
    var pages = []

    for (var layerName in voice) {
        pages.push(layerName)
    }

    return pages
}

function getInputRange(layer, property) {
    if (property.inputRange) {
        return property.inputRange
    }

    if (property.name === constants.subPageName) {
        return getSubPageInputRange(layer)
    }

    if (property.name === constants.sampleTypeName) {
        return layer.samples
    }

    return []
}

function getSubPageInputRange(layer) {
    var pages = macroLayouts[layer.macroLayout]
    var pageNames = []
    for (var i in pages) {
        pageNames.push(pages[i].name)
    }
    return pageNames
}

function getChainSelectInputRange(layer, sampleTypeName) {
    if (layer.overrideSampleNames) {
        return layer.overrideSampleNames
    }

    var samples = []
    var folder = new Folder(constants.drumSamplesPath + '/' + activeVoiceName + '/' + layer.samples[sampleTypeName])
    folder.typelist = ['WAVE']

    folder.next()
    while (!folder.end) {
        var indexStart = folder.filename.indexOf('_') + 1
        var indexEnd = folder.filename.indexOf('.')
        var sample = folder.filename.slice(indexStart, indexEnd)
        samples.push(sample)
        folder.next()
    }

    folder.close()

    return samples
}

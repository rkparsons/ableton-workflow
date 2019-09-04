var apiDetails = {}
var liveObservers = {}
var isInitialised = false
var isPreview = true
var isPreviewHighVelocity = true
var lastPreviewTime = 0

exports.initialise = function() {
    observeVoice()

    isInitialised = true
}

exports.isInitialised = function() {
    return isInitialised
}

exports.toggle = function(isDeviceEnabled) {
    isInitialised = false

    for (var apiId in liveObservers) {
        for (var apiProperty in liveObservers[apiId]) {
            liveObservers[apiId][apiProperty].api.property = isDeviceEnabled ? apiProperty : ''
        }
    }

    isInitialised = true
}

exports.getObserver = function(apiId, apiProperty) {
    liveObservers[apiId][apiProperty]
}

exports.sendValue = function(layerName, propertyName, value) {
    var apiDetail = apiDetails[layerName][propertyName]
    var observer = liveObservers[apiDetail.apiId][apiDetail.apiProperty]

    observer.api.set(apiDetail.apiProperty, value)
}

exports.setPreview = function(value) {
    isPreview = value
}

function observeVoice() {
    for (var layerName in activeVoice) {
        apiDetails[layerName] = {}
        observeLayer(activeVoice, layerName)
    }
}

function observeLayer(activeVoice, layerName) {
    var layer = activeVoice[layerName]

    for (var deviceIndex in layer.devices) {
        var deviceName = layer.devices[deviceIndex]
        observeDevice(activeVoice, layerName, deviceName)
    }
}

function observeDevice(activeVoice, layerName, deviceName) {
    for (var propertyIndex in properties[deviceName]) {
        var property = properties[deviceName][propertyIndex]
        if (property.path !== undefined) {
            observeProperty(activeVoice, layerName, property)
        }
    }
}

function observeProperty(activeVoice, layerName, property) {
    var apiProperty = property.apiProperty || 'value'
    var api = createApi(activeVoice, layerName, property, apiProperty)

    storeApiDetails(layerName, property, apiProperty, api)
    createObserver(api, apiProperty, layerName, property)
    syncValue(layerName, property.name, apiProperty, api.get(apiProperty))
}

function createObserver(api, apiProperty, layerName, property) {
    liveObservers[api.id] = liveObservers[api.id] || {}

    liveObservers[api.id][apiProperty] = {
        layerName: layerName,
        propertyName: property.name,
        api: api,
    }
}

function createApi(activeVoice, layerName, property, apiProperty) {
    var chainIndex = activeVoice[layerName].index - 1
    var path = [constants.chainsPath, chainIndex, property.path].join(' ')
    var api = new LiveAPI(onValueEvent, path)
    api.property = apiProperty

    return api
}

function storeApiDetails(layerName, property, apiProperty, api) {
    apiDetails[layerName][property.name] = {
        apiId: api.id,
        apiProperty: apiProperty,
    }
}

function onValueEvent(args) {
    if (!isInitialised) {
        return
    }

    var apiId = this.id
    var apiProperty = args[0]
    var observedValue = args[1]
    var observer = liveObservers[apiId][apiProperty]

    syncValue(observer.layerName, observer.propertyName, apiProperty, observedValue)
}

function syncValue(layerName, propertyName, apiProperty, value) {
    objects.syncInputToValue(propertyName, layerName, value)

    if (propertyName === constants.muteName) {
        syncSubPageInputToMute(layerName, value)
    } else if (propertyName === constants.sampleTypeName) {
        syncBanksToSampleType(layerName, value)
    }

    previewChange(apiProperty, propertyName)
}

function syncBanksToSampleType(layerName, sampleTypeIndex) {
    activeVoice[layerName].activeSampleTypeIndex = sampleTypeIndex

    initBanks()
}

function syncSubPageInputToMute(layerName, isMuted) {
    var layer = activeVoice[layerName]
    var macroLayout = layer.macroLayout
    var subPageIndex = isMuted == 0 ? 1 : 0
    var subPage = macroLayouts[macroLayout][subPageIndex].name

    layer.activePage = subPage

    objects.syncInputToValue(constants.subPageName, layerName, subPageIndex)
    initBanks()
}

function previewChange(apiProperty, propertyName) {
    var currentTime = new Date()
    var isValueChange = apiProperty === 'value'
    var isSampleSelect = propertyName === constants.chainSelectName || propertyName === constants.sampleTypeName
    var isPreviewDue = isSampleSelect || currentTime - lastPreviewTime > 300

    if (isInitialised && isPreview && isValueChange && isPreviewDue) {
        sendPreviewNote(currentTime, isSampleSelect)
    }
}

function sendPreviewNote(currentTime, isSampleSelect) {
    var velocity = isSampleSelect || isPreviewHighVelocity ? 100 : 30

    lastPreviewTime = currentTime
    isPreviewHighVelocity = !isPreviewHighVelocity

    outlet(0, [60, velocity])
}

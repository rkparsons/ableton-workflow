include('parameterPage')
include('parameterFactory')

var ParameterPageFactory = defclass(Object, function() {
    this.constructor = function(samplesFolder) {
        this.parameterFactory = new ParameterFactory(samplesFolder)
        this.config = require('parameterPageConfig')
    }

    this.create = function(drumPadName, drumLayerName, pathToDrumLayer, devicesCount) {
        var parameterPages = []
        var deviceTypeToIndex = {}
        var instrumentType = null

        for (var deviceIndex = 0; deviceIndex < devicesCount; deviceIndex++) {
            const deviceApi = new LiveAPI(null, pathToDrumLayer + ' devices ' + deviceIndex)
            const deviceType = parseInt(deviceApi.get('type'))
            const deviceName = deviceApi.get('name')

            deviceTypeToIndex[deviceName] = deviceIndex

            if (deviceType === 1) {
                instrumentType = deviceName
            }
        }

        for (i in this.config[instrumentType]) {
            const page = this.config[instrumentType][i]
            const result = this.parameterFactory.create(drumPadName, drumLayerName, page.parameters, deviceTypeToIndex, pathToDrumLayer)

            parameterPages.push(new ParameterPage(page.name, result.parameters, result.categoryParameterIndex, result.sampleParameterIndex))
        }

        return parameterPages
    }
})

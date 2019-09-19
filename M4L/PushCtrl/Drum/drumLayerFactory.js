include('drumLayer')
include('parameterPageFactory')

var DrumLayerFactory = defclass(Object, function() {
    this.constructor = function() {
        this.parameterPageFactory = new ParameterPageFactory()
    }

    this.create = function(drumPadName, pathToDrumLayers, drumLayerCount) {
        var drumLayers = []

        for (var i = 0; i < drumLayerCount; i++) {
            const pathToDrumLayer = pathToDrumLayers + ' chains ' + i
            const drumLayerApi = new LiveAPI(null, pathToDrumLayer)
            const drumLayerName = drumLayerApi.get('name')
            const devicesCount = drumLayerApi.get('devices').length / 2
            const parameterPages = this.parameterPageFactory.create(drumPadName, drumLayerName, pathToDrumLayer, devicesCount)

            drumLayers[i] = new DrumLayer(drumLayerName, parameterPages)
        }

        return drumLayers
    }
})

include('enumParameter')
include('filteredEnumParameter')
include('valueParameter')

var ParameterFactory = (function() {
    function ParameterFactory() {
        this.config = require('parameterConfig')
        this.fileReader = require('fileReader')
    }

    ParameterFactory.prototype.create = function(drumPadName, drumLayerName, parameterNames, deviceTypeToIndex, pathToDrumLayer) {
        var parameters = []
        var categoryParameterIndex = null
        var sampleParameterIndex = null
        var sampleCategories = null

        for (var parameterindex = 0; parameterindex < parameterNames.length; parameterindex++) {
            if (parameterNames[parameterindex]) {
                const parameterNameParts = parameterNames[parameterindex].split('_')
                const targetDeviceType = parameterNameParts[0]
                const targetParameterName = parameterNameParts[1]
                const targetDeviceIndex = deviceTypeToIndex[targetDeviceType]
                const targetDevicePath = targetDeviceIndex !== undefined ? pathToDrumLayer + ' devices ' + targetDeviceIndex : pathToDrumLayer
                const deviceConfig = this.config[targetDeviceType]
                const parameterConfig = deviceConfig ? deviceConfig[targetParameterName] : null

                // can remove this check
                if (!parameterConfig) {
                    continue
                }

                const apiProperty = parameterConfig.property ? parameterConfig.property : 'value'
                const apiPath = targetDevicePath + ' ' + parameterConfig.path

                if (targetParameterName === 'Category') {
                    sampleCategories = this.fileReader.getCategories(drumPadName, drumLayerName)
                    parameterConfig.options = sampleCategories
                    categoryParameterIndex = parameterindex

                    parameters.push(new EnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
                } else if (targetParameterName === 'Select') {
                    parameterConfig.options = this.fileReader.getSampleGroups(drumPadName, drumLayerName, sampleCategories)
                    sampleParameterIndex = parameterindex
                    parameters.push(new FilteredEnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
                } else if (parameterConfig.unitType === constants.unitType.ENUM) {
                    parameters.push(new EnumParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.options))
                } else {
                    parameters.push(new ValueParameter(parameterConfig.displayName, apiPath, apiProperty, parameterConfig.unitType, parameterConfig.inputRange, parameterConfig.displayRange))
                }
            }
        }

        return {
            parameters: parameters,
            categoryParameterIndex: categoryParameterIndex,
            sampleParameterIndex: sampleParameterIndex,
        }
    }

    return ParameterFactory
})()

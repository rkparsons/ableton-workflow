include('parameter')
const config = require('parameterConfig')

exports.create = function(targetDeviceName, targetParameterName, targetDevicePath) {
    const deviceConfig = config[targetDeviceName]
    const parameterConfig = deviceConfig ? deviceConfig[targetParameterName] : null

    if (deviceConfig && parameterConfig) {
        return new Parameter(targetParameterName, parameterConfig, targetDevicePath + ' ' + parameterConfig.path)
    }
}

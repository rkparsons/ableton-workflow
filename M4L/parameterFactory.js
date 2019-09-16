include('parameter')
const config = require('parameterConfig')

exports.create = function(name) {
    if (config[name]) {
        return new Parameter(name, config[name].min, config[name].max)
    }
}

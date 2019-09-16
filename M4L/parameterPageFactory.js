include('parameterPage')
const parameterFactory = require('parameterFactory')

exports.create = function(name, parameterNames) {
    var parameters = []

    for (i in parameterNames) {
        if (parameterNames[i]) {
            parameters.push(parameterFactory.create(parameterNames[i]))
        }
    }

    return new ParameterPage(name)
}

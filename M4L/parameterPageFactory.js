include('parameterPage')
const parameterPageConfig = require('parameterPageConfig')
const parameterFactory = require('parameterFactory')

exports.create = function(name, parameterNames) {
    var parameters = []

    for (i in parameterNames) {
        parameters.push(parameterFactory.create(parameterNames[i]))
    }

    return new ParameterPage(name)
}

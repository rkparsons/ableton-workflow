const parameterFactory = require('parameter')

exports.create = function(pageName) {
    return new ParameterPage(pageName)
}

function ParameterPage(pageName) {
    this.pageName = pageName

    // populate dynamically
    this.parameters = []
    this.parameterNames = ['sample_type', 'sample_select', 'delay', 'start', 'reverse', 'solo']

    for (i in this.parameterNames) {
        this.parameters.push(parameterFactory.create(this.parameterNames[i]))
    }

    this.onValueChanged = function(callback) {
        for (i in this.parameters) {
            this.parameters[i].onValueChanged(callback)
        }
    }

    this.getParameterValues = function() {
        var parameterValues = []

        for (i in this.parameters) {
            parameterValues.push(this.parameters[i].getDisplayValue())
        }

        return parameterValues
    }

    this.getParameter = function(parameterIndex) {
        return this.parameters[parameterIndex]
    }
}

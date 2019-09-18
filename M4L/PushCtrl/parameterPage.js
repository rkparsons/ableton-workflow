function ParameterPage(pageName, parameters) {
    this.pageName = pageName
    this.parameters = parameters

    this.onValueChanged = function(callback) {
        for (i in this.parameters) {
            if (this.parameters[i]) {
                this.parameters[i].onValueChanged(callback)
            }
        }
    }

    this.getParameterValues = function() {
        var parameterValues = []

        for (i in this.parameters) {
            parameterValues.push(this.parameters[i] ? this.parameters[i].getDisplayValue() : '')
        }

        return parameterValues
    }

    this.getParameter = function(parameterIndex) {
        return this.parameters[parameterIndex]
    }
}

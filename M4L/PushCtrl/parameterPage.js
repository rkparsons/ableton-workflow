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

    this.getParameterNames = function() {
        var names = []

        for (i in this.parameters) {
            names.push(this.parameters[i] ? this.parameters[i].getDisplayName() : '')
        }

        return names
    }

    this.getParameterValues = function() {
        var values = []

        for (i in this.parameters) {
            values.push(this.parameters[i] ? this.parameters[i].getDisplayValue() : '')
        }

        return values
    }

    this.getParameter = function(parameterIndex) {
        return this.parameters[parameterIndex]
    }
}

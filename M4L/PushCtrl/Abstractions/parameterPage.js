function ParameterPage(pageName, parameters, categoryParameterIndex, sampleParameterIndex) {
    this.pageName = pageName
    this.parameters = parameters
    this.categoryParameterIndex = categoryParameterIndex
    this.sampleParameterIndex = sampleParameterIndex

    this.onValueChanged = function(callback) {
        this.callback = callback
        for (i in this.parameters) {
            if (this.parameters[i]) {
                this.parameters[i].onValueChanged(this._handleParameterChange.bind(this, i, callback))
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

    this._handleParameterChange = function(i, callback) {
        this._handleSampleCategoryChange()
        callback()
    }

    this._handleSampleCategoryChange = function(i) {
        if (i === this.categoryParameterIndex) {
            this.parameters[this.sampleParameterIndex].filterOptions(this.parameters[i].getDisplayValue())
        }
    }
}

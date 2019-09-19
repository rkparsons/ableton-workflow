var ParameterPage = (function() {
    function ParameterPage(pageName, parameters, categoryParameterIndex, sampleParameterIndex) {
        this.pageName = pageName
        this.parameters = parameters
        this.categoryParameterIndex = categoryParameterIndex
        this.sampleParameterIndex = sampleParameterIndex
    }

    ParameterPage.prototype.onValueChanged = function(callback) {
        this.callback = callback
        for (i in this.parameters) {
            if (this.parameters[i]) {
                this.parameters[i].onValueChanged(handleParameterChange.bind(this, parseInt(i), callback))
            }
        }
    }

    ParameterPage.prototype.getParameterNames = function() {
        var names = []

        for (i in this.parameters) {
            names.push(this.parameters[i] ? this.parameters[i].getDisplayName() : '')
        }

        return names
    }

    ParameterPage.prototype.getParameterValues = function() {
        var values = []

        for (i in this.parameters) {
            values.push(this.parameters[i] ? this.parameters[i].getDisplayValue() : '')
        }

        return values
    }

    ParameterPage.prototype.getParameter = function(parameterIndex) {
        return this.parameters[parameterIndex]
    }

    function handleParameterChange(i, callback) {
        handleSampleCategoryChange.call(this, i)
        callback()
    }

    function handleSampleCategoryChange(i) {
        if (i === this.categoryParameterIndex) {
            this.parameters[this.sampleParameterIndex].filterOptions(this.parameters[i].getDisplayValue())
        }
    }

    return ParameterPage
})()

var ParameterPage = defclass(Object, function() {
    this.constructor = function(pageName, parameters, categoryParameterIndex, sampleParameterIndex) {
        this.pageName = pageName
        this.parameters = parameters
        this.categoryParameterIndex = categoryParameterIndex
        this.sampleParameterIndex = sampleParameterIndex
    }

    this.onValueChanged = function(callback) {
        this.callback = callback
        for (i in this.parameters) {
            if (this.parameters[i]) {
                this.parameters[i].onValueChanged(handleParameterChange.bind(this, parseInt(i), callback))
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

    function handleParameterChange(i, callback) {
        handleSampleCategoryChange.call(this, i)
        callback()
    }

    function handleSampleCategoryChange(i) {
        if (i === this.categoryParameterIndex) {
            this.parameters[this.sampleParameterIndex].filterOptions(this.parameters[i].getDisplayValue())
        }
    }
})

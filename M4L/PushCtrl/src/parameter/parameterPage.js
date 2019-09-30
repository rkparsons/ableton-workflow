export function ParameterPage(index, name, parameters, categoryParameterIndex, sampleParameterIndex) {
    this.getIndex = function() {
        return index
    }

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
        this.callback = callback
        for (i in parameters) {
            if (parameters[i]) {
                parameters[i].onValueChanged(handleParameterChange.bind(this, parseInt(i), callback))
            }
        }
    }

    this.getParameters = function() {
        return parameters
    }

    this.getParameter = function(parameterIndex) {
        return parameters[parameterIndex]
    }

    this.getSampleParameter = function() {
        return parameters[sampleParameterIndex]
    }

    this.default = function() {
        for (i in parameters) {
            parameters[i].default()
        }
    }

    this.random = function() {
        for (i in parameters) {
            parameters[i].random()
            handleSampleCategoryChange.call(this, parseInt(i))
        }
    }

    function handleParameterChange(i, callback) {
        handleSampleCategoryChange.call(this, i)

        callback()
    }

    // todo: move categoryParameterIndex into parameter class
    function handleSampleCategoryChange(i) {
        if (i === categoryParameterIndex) {
            parameters[sampleParameterIndex].filterOptions(parameters[i].getDisplayValue())
        }
    }
}

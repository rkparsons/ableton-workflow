export function ParameterPage(index, name, parameters, repitchWarpParameterIndex, bpmParameterIndex) {
    this.getIndex = function() {
        return index
    }

    this.getName = function() {
        return name
    }

    this.onValueChanged = function(callback) {
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

    this.getBpmParameterIndex = function() {
        return bpmParameterIndex
    }

    this.getRepitchWarpParameter = function() {
        return parameters[repitchWarpParameterIndex]
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

    function handleSampleCategoryChange(parameterIndex) {
        const categoryParameter = this.getParameter(parameterIndex)

        if (!categoryParameter.isCategory) {
            return
        }

        this.getParameters()
            .find(parameter => parameter.isSample)
            .filterOptions(categoryParameter.getDisplayValue())

        const sampleBpm = Number(categoryParameter.getDisplayValue().split('#')[1])

        if (sampleBpm) {
            this.getRepitchWarpParameter().warpToSampleBpm(sampleBpm)
        }
    }
}

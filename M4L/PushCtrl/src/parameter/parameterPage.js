export function ParameterPage(index, pageName, parameters, categoryParameterIndex, sampleParameterIndex) {
    this.pageName = pageName
    this.parameters = parameters
    this.categoryParameterIndex = categoryParameterIndex
    this.sampleParameterIndex = sampleParameterIndex

    this.getName = function() {
        return pageName
    }
    this.getIndex = function() {
        return index
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

    this.getSampleParameter = function() {
        return this.parameters[this.sampleParameterIndex]
    }

    this.default = function() {
        for (i in this.parameters) {
            this.parameters[i].default()
        }
    }

    this.random = function() {
        for (i in this.parameters) {
            this.parameters[i].random()
            handleSampleCategoryChange.call(this, parseInt(i))
        }
    }

    function handleParameterChange(i, callback) {
        handleSampleCategoryChange.call(this, i)

        callback()
    }

    // could move to subclass
    function handleSampleCategoryChange(i) {
        if (i === this.categoryParameterIndex) {
            this.parameters[this.sampleParameterIndex].filterOptions(this.parameters[i].getDisplayValue())
        }
    }
}
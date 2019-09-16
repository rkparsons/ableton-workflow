function DrumLayer(name) {
    this.name = name
    this.parameterPages = []
    this.focussedPageIndex = 0

    this.onValueChanged = function(callback) {
        for (i in this.parameterPages) {
            this.parameterPages[i].onValueChanged(callback)
        }
    }

    this.focusPage = function(pageIndex) {
        this.focussedPageIndex = pageIndex
    }

    this.activePage = function() {
        return this.parameterPages[this.focussedPageIndex]
    }
}

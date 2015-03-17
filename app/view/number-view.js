// creates a number button
function NumberView(model) {
    this._model = model;
    this._button;
    var that = this;

    var __construct =function(){
        that._button = document.createElement("BUTTON");
        that._button.value = that._model.getValue();
        var t = document.createTextNode(that._model.getValue());
        that._button.appendChild(t);
    }();

};

NumberView.prototype = {
    getValue : function () {
        return this._button;
    }
};
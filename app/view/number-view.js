function NumberView(model) {
    this._model = model;
    var that = this;

    var __construct =function(){
        var btn = document.createElement("BUTTON");
        btn.value = that._model.getValue();
        var t = document.createTextNode(that._model.getValue());
        btn.appendChild(t);
        var div = document.getElementsByClassName('num-block')[0];
        div.appendChild(btn);

    }();
};
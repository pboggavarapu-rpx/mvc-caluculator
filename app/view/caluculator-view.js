function CaluculatorView(model) {
    this._model = model;
    var that = this;

    var __construct =function(){
      var mainDiv = document.createElement('div');
      mainDiv.className = 'page-body';
      mainDiv.id = that._model.name;
      document.getElementById('container').appendChild(mainDiv);

      var screenBox =  new ScreenController(that._model.name, mainDiv);
      var operators =  new OperatorController(that._model.result, mainDiv);
      var numbers =  new NumberController(that._model.inputString, mainDiv);
    }();
};
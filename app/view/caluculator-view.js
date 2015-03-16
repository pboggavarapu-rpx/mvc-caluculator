function CaluculatorView(model) {
    this._model = model;
    var that = this;

    var __construct =function(){
      var mainDiv = document.createElement('div');
      mainDiv.className = 'page-body';
      mainDiv.id = that._model.name;
      document.getElementById('container').appendChild(mainDiv);

      var screenBox =  new ScreenController(that._model);
      var operators =  new OperatorController(that._model);
      var numbers =  new NumberController(that._model);
    }();
};
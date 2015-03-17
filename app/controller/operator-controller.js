function OperatorController(calcModelResult, mainDiv) {

    this._calcModelResult = calcModelResult;
    this._mainDiv = mainDiv;
    var that = this;

        var __construct =function(){

        var opBlock = document.createElement('div');
        opBlock.className = 'operator-block';
        that._mainDiv.appendChild(opBlock);
        ops = ['+','-','*','/','%','='];
        for (i = 0; i < ops.length; i += 1) {
          var model = new OperatorBtnModel(ops[i]);
          var view = new OperatorView(model);
          var viewButton =  view.getValue();
          opBlock.appendChild(viewButton);
          viewButton.addEventListener("click", function(x){return function(){that._calcModelResult(x);}}(model), false);

        }
    }();
};
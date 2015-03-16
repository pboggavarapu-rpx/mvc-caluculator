function OperatorController(calcModel) {
    this._calcModel = calcModel;
    var that = this;

        var __construct =function(){

        var div = document.createElement('div');
        div.className = 'operator-block';
        document.getElementsByClassName("page-body")[0].appendChild(div);
        ops = ['+','-','*','/','%','='];
        for (i = 0; i < ops.length; i += 1) {
          var model = new OperatorBtnModel(ops[i]);

          var view = new OperatorView(model);
        }
        document.getElementById(that._calcModel.getName()).getElementsByClassName('operator-block')[0].addEventListener("click", that._calcModel.result);

    }();

};
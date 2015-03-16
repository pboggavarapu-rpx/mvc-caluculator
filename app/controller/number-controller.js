function NumberController(calcModel) {
    this._calcModel = calcModel;
    var that = this;

        var __construct =function(){

        var div = document.createElement('div');
        div.className = 'num-block';
        document.getElementsByClassName("page-body")[0].appendChild(div);
        nums = ''
        nums = nums + '<button TYPE="button" VALUE="AC">AC</button>'
        nums = nums + '<button TYPE="button" VALUE=".">.</button>'
        var div = document.getElementsByClassName('num-block')[0];
        div.innerHTML = nums;

        for (i = 0; i <= 9; i += 1) {
          var model = new NumberBtnModel(i)

          var view = new NumberView(model);
        }
        document.getElementById(that._calcModel.getName()).getElementsByClassName('num-block')[0].addEventListener("click", that._calcModel.inputString);

    }();
};
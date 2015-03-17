// creates a operator button
function NumberController(calcModelInputString, mainDiv) {
    this._calcModelInputString = calcModelInputString;
    this._mainDiv = mainDiv;
    var that = this;

    var __construct =function(){

        var numBlock = document.createElement('div');
        numBlock.className = 'num-block';
        that._mainDiv.appendChild(numBlock);

        nums = ["AC",".",0,1,2,3,4,5,6,7,8,9]
        for (i = 0; i < nums.length; i += 1) {
          model = new NumberBtnModel(nums[i])
          view = new NumberView(model);
          viewButton =  view.getValue();
          numBlock.appendChild(viewButton);
          viewButton.addEventListener("click", function(x){return function(){that._calcModelInputString(x);}}(model), false);
        }

    }();
};
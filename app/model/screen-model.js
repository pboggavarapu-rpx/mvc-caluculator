function ScreenModel(calcName) {
    // this.name = name;
    // this.size = size;
    this.calcName = calcName;
    this.screenBoard;
    this.value ;
    var that = this;

};

ScreenModel.prototype = {
    getValue : function () {
    	this.screenBoard = document.getElementById(this.calcName).getElementsByClassName("screen")[0];
      return this.screenBoard.value;
    },
    setValue : function (val) {
      this.screenBoard.value = val;
      return this.value = val;
    }
};
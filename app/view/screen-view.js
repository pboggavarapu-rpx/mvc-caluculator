function ScreenView(calcModel) {
	this._calcModel = calcModel;
	this.value;
	this.screenBoard;

  var that = this;

	var __construct =function(){
	  var div = document.createElement('div');
	  div.className = 'screen-div';
	  div.innerHTML = '<h1>'+that._calcModel.name+'</h1><input type="text" name="screen-box" class="screen" readonly>'
	  document.getElementById(that._calcModel.name).appendChild(div);

	}();
};


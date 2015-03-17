function ScreenView(divName, mainDiv) {
	this._divName = divName;
	this._mainDiv = mainDiv;
	this.value;
	this.screenBoard;

  var that = this;

	var __construct =function(){
	  var div = document.createElement('div');
	  div.className = 'screen-div';
	  div.innerHTML = '<h1>'+that._divName+'</h1><input type="text" name="screen-box" class="screen" readonly>'
	  that._mainDiv.appendChild(div);

	}();
};


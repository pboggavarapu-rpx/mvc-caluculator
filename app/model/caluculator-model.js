var calculator = {
    '+': function(a, b) {
        return a + b;
    },

    '-': function(a, b) {
        return a - b;
    },

    '*': function(a, b) {
        return a * b;
    },

    '/': function(a, b) {
        return a / b;
    },

    '%': function(a, b) {
        return a / b;
    },

    calc: function(a, b, op) {
        if (this[op] === undefined) {
            console.log("Unknown operation!!");
            return undefined;
        }
        return this[op](parseFloat(a), parseFloat(b));
    }
};



function CaluculatorModel(name) {
    this.name = name;
    this.screenBoard = "";
    this.operatorOne = false;
    this.firstVal;
    this.operator;
    this.screenModel = new ScreenModel(this.name);

    var that = this;

		this.inputString = function(model){
			that.screenBoard = that.screenModel.getValue();
		  var screenVal = that.screenModel.getValue();
		  var currentChar = model.value;
		  if(currentChar == "AC")
		  	that.reset();
		  else{
			  that.screenModel.setValue(screenVal+currentChar);
		  }
		};
		this.reset = function(){
		  that.screenModel.setValue("");
	    that.operatorOne = false;
	    that.firstVal = "";
	    that.operator = "";

		};

		this.result = function(model){
				var screenVal = that.screenModel.getValue();

				// try
				// {

			  	if(that.operatorOne == false && screenVal.length > 0){
						that.operator = model.value;
						if(that.operator == "="){
			        screenVal = that.firstVal;
						}
						else{
							that.operatorOne = true;
						  that.firstVal = screenVal;
						  that.screenModel.setValue("");
				    }
			    }
			    else if(screenVal >= 1){
			      console.log(that.firstVal);
			      console.log(screenVal);
			      console.log(that.operator);
			      if(that.operator != "="){
			        that.firstVal = calculator.calc(that.firstVal, screenVal, that.operator);
			      }

            that.operatorOne = false;
			      that.operator = event.target.value;
			      console.log(that.firstVal);
			      console.log("-----------");

			      that.screenModel.setValue(parseFloat(that.firstVal));
			    }
			    else{
			      that.operator = event.target.value;
			    }
		 //  }
			// catch(e)
			// {
			//   that.screenBoard.value = 'Error';
			// }
			};
};


CaluculatorModel.prototype = {
    getName : function () {
        return this.name;
    }
};


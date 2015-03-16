function CaluculatorController(name) {

    var _this = this;
    var calcModel =  new CaluculatorModel(name);
    var calcView =  new CaluculatorView(calcModel);

};
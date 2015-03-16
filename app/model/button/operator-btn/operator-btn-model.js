function OperatorBtnModel(value) {
    this.name = value;
    this.value = value;
};

OperatorBtnModel.prototype = {
    getValue : function () {
        return this.value;
    }
};
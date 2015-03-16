function NumberBtnModel(value) {
    this.name = value;
    this.value = value;
};

NumberBtnModel.prototype = {
    getValue : function () {
        return this.value;
    }
};

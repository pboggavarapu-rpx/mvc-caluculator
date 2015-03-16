function BtnModel(name,value, type) {
    this.name = name;
    this.value = value;
    this.btnType = type;
};

BtnModel.prototype = {
    getValue : function () {
        return this.value;
    },
    getBtnType : function () {
        return this.btnType;
    }
};
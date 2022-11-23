function valida() {
    var retVal = true
    var _nome = document.getElementById("fld_1");
    var _nomeError = document.getElementById("fld_1_Error");
    var nomearray =_nome.value.split(" ")
    if (_nomearray.length < 2) {
        retVal = false;
        print(_nomeError)
        console.log("CALL: valida()");
    }
    var _sexo = document.getElementById("field_2").checked;
    if (_sexo == false) {
        retVal = false;
    }
    var _date = new Date("field_3").getDate();
    var _month = new Date("field_3").getMonth();
    var _year = new Date("field_3").getFullYear();
    if (_date == "") {
        retVAl = false;
    }
    var _ALGA = document.getElementById("field_51").value;
    var _EF = document.getElementById("field_52").value;
    var _CI = document.getElementById("field_53").value;
    var _ITW = document.getElementById("field_54").value;
    var _FP = document.getElementById("field_55").value;
    if (_ALGA == "") {
        retVAL = false

    }
    if (_EF == "") {
        retVAL = false

    }
    if (_CI == "") {
        retVAL = false

    }
    if (_ITW == "") {
        retVAL = false

    }
    if (_FP == "") {
        retVAL = false

    }
    return retval
}

function media() {
    var _ALGA = parsefloat(document.getElementById("field_51").value);
    var _EF = parsefloat(document.getElementById("field_52").value);
    var _CI = parsefloatd(ocument.getElementById("field_53").value);
    var _ITW = parsefloat(document.getElementById("field_54").value);
    var _FP = parsefloat(document.getElementById("field_55").value);
    media = (_ALGA + _EF + _CI + _FP + _ITW)/5
}


function limpa() {
    document.getElementById("fld_1").value = ""
    document.getElementById("field_2").value = ""
    document.getElementById("field_3").value = ""
    document.getElementById("field_51").value = ""
    document.getElementById("field_52").value = ""
    document.getElementById("field_53").value = ""
    document.getElementById("field_54").value = ""
    document.getElementById("field_55").value = ""
 

    console.log("CALL: limpa()");
}


// FÓRMULAS
// ----------------------------------------------------------------
// new Date("2019-11-09").getDate();     //--- Devolverá 9
// new Date("2019-11-09").getMonth();    //--- Devolverá 11
// new Date("2019-11-09").getFullYear(); //--- Devolverá 2019
// 
// document.getElementById("myCheck").checked //--- testa se uma checkbox/radiobox está checked

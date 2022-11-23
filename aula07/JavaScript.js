var start = true;
var controlo = 1;
var op1 = "";
var op2 = "";
var operacao = "";
var res = document.getElementById("res");

function addNumber() {
    var x = event.target.value;
    if (controlo == 1) {
        op1 = op1 + x;
    }
    else {
        op2 = op2 + x;
    }
    if (start == true) {
        res.innerText = "";
        start = false;
    }
    res.innerText += x;
}

function addOperation() {
    var x = event.target.value;
    if (operacao == "" && op1 != "") {
        operacao = x;
        res.innerText += x;
        controlo = 2;
    }
    else {
        erro();
    }
}

function clearResult() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "0";
}

function calculate() {
    var error = 0;
    var op1_value = parseFloat(op1);
    var op2_value = parseFloat(op2);

    if (controlo == 2 && op2 != "") {
        switch (operacao) {
            case "+":
                res.innerText = parseFloat(op1_value) + parseFloat(op2_value);
                break;
            case "-":
                res.innerText = parseFloat(op1_value) - parseFloat(op2_value);
                break;
            case "*":
                res.innerText = parseFloat(op1_value) * parseFloat(op2_value);
                break;
            case "/":
                if (op2_value == 0) {
                    erro();
                    break;
                }
                resultado = op1_value / op2_value;
                break;
        }
        op1 = res.innerText;
        op2 = "";
        controlo = 1;
        operacao = "";
    }
    else {
        erro();
    }
}

function erro() {
    start = true;
    controlo = 1;
    operacao = "";
    op1 = "";
    op2 = "";
    res.innerText = "Erro";
}

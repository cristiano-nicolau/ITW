﻿     var quantidade = document.getElementById("quantidades");
    var total = document.getElementById("total");

    var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
    var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
    var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
    var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);

    var produto1 = parseFloat(document.getElementById("produto1").value);
    var produto2 = parseFloat(document.getElementById("produto2").value);
    var produto3 = parseFloat(document.getElementById("produto3").value);
    var produto4 = parseFloat(document.getElementById("produto4").value);

    var somaProdutos = produto1 + produto2 + produto3 + produto4
    var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4

function calcular(){


    var precoproduto1 = parseFloat(document.getElementById("precoproduto1").value);
    var precoproduto2 = parseFloat(document.getElementById("precoproduto2").value);
    var precoproduto3 = parseFloat(document.getElementById("precoproduto3").value);
    var precoproduto4 = parseFloat(document.getElementById("precoproduto4").value);

    var produto1 = parseFloat(document.getElementById("produto1").value);
    var produto2 = parseFloat(document.getElementById("produto2").value);
    var produto3 = parseFloat(document.getElementById("produto3").value);
    var produto4 = parseFloat(document.getElementById("produto4").value);

    var somaProdutos = produto1 + produto2 + produto3 + produto4
    var precoTotalInicial = produto1 * precoproduto1 + produto2 * precoproduto2 + produto3 * precoproduto3 + produto4 * precoproduto4

    precoTotal = 0

    if (somaProdutos >= 5) {
        precoTotal = precoTotalInicial - (0.05 * precoTotalInicial)
    } else {
        precoTotal = precoTotalInicial
    }
    if (precoTotalInicial > 100) {
        precoTotal = precoTotal - (0.05 * precoTotal)
    }
    quantidade.innerText = somaProdutos
    total.innerText = precoTotal

}
function comprar(number) {
    var produto = document.getElementById("produto" + number);
    var x = parseFloat(produto.value) + 1;
    produto.value = x.toString();

    calcular()

}




function validar() {
    var retVal = true;

    var quantidaded = parseFloat(document.getElementById("quantidades"));

    if (quantidade == 0) {
        retVal = false
        alert("Tem de comprar no minimo um produto")
    }


}

function limpar() {
    for (var i = 1; i <= 4; i++) {
        var x = document.getElementById("produto" + i);
        x.value = "0";

    }


    quantidade.innerText = 0;
    total.innerText = "0.00";


}

var inputEntrada = document.querySelector("#texto");
var inputSaida = document.querySelector("#saida");

var btncrypto = document.querySelector("#btncrypto");
var btndescrypto = document.querySelector("#btndescrypto");


function criptografar() {
    if (inputEntrada.value ==""){
        inputSaida.value = "Por Favor Digite Alguma Coisa";
    }
    else {
        var text = inputEntrada.value;
        var result = text.replace(/e/g, "enter");
        var result1 = text.replace(/i/g, "imes");
        var result2 = text.replace(/a/g, "ai");
        var result3 = text.replace(/u/g, "ufat");
        var result4 = text.replace(/o/g, "ober");

        inputSaida.value = result4;
    }
    
}

function descriptografar() {
    if (inputEntrada.value ==""){
        inputSaida.value = "Por Favor Digite Alguma Coisa.";
    }
    else {
        var text = inputEntrada.value;
        var result = text.replace(/enter/g, "e");
        var result1 = text.replace(/imes/g, "i");
        var result2 = text.replace(/ai/g, "a");
        var result3 = text.replace(/ufat/g, "u");
        var result4 = text.replace(/ober/g, "o");

        inputSaida.value = result4;
    }
}

btncrypto.onclick = criptografar;

btndescrypto.onclick = descriptografar;
var inputEntrada = document.querySelector("#texto");
var inputSaida = document.querySelector("#saida");

var btncrypto = document.querySelector("#btncrypto");
var btndescrypto = document.querySelector("#btndescrypto");


function criptografar() {
    if (inputEntrada.value ==""){
        inputSaida.value = "Por Favor Digite Alguma Coisa";
    }
    else {
        var text = inputEntrada.value; //pegando do input do usuario
        var result  =  text.replace(/e/g, 'enter'); // irá converter tudo de "e" para "enter"
        var result2 = result.replace(/i/g, 'imes'); // irá converter tudo de "i" para "imes" 
        var result3 = result2.replace(/a/g, 'ai');
        var result4 = result3.replace(/o/g, 'ober');
        var result5 = result4.replace(/u/g, 'ufat');

        inputSaida.value= result5;

    }
    
}

function descriptografar() {
    if (inputEntrada.value ==""){
        inputSaida.value = "Por Favor Digite Alguma Coisa.";
    }
    else {
        var text = inputEntrada.value;
        var result = text.replace(/enter/g, "e");
        var result1 = result.replace(/imes/g, "i");
        var result2 = result1.replace(/ai/g, "a");
        var result3 = result2.replace(/ufat/g, "u");
        var result4 = result3.replace(/ober/g, "o");

        inputSaida.value = result4;
    }
}

    function copiar () {
        var copytext = document.getElementById("saida");
        copytext.select();
        navigator.clipboard.writeText(copytext.value);

        alert("Texto Copiado Com Sucesso")
}


btncrypto.onclick = criptografar;

btndescrypto.onclick = descriptografar;
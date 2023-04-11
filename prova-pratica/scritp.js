function conversao(cs){        
    var valor1 = parseFloat(document.getElementById("euro").value);
    var valor2 = parseFloat(document.getElementById("dolar").value);
    var valor3 = parseFloat(document.getElementById("libras").value);
    var valor4 = parseFloat(document.getElementById("valor").value);
    var resposta = parseFloat(document.getElementById("resposta").value);
    var resposta_final;

    switch (cs) {

        case "*":
            resposta_final = valor1 * valor4
            resposta_final = valor2 * valor4
            resposta_final = valor3 * valor4
            break

    }
    resposta.value = resposta_final;

}
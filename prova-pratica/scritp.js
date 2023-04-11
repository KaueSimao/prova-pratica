function converterMoedas(Euro, Dólar, Libras, Valor) {
    if (Euro === "metros" && numeroSaida === "quilometros") {
      return quantidade / 1000;
    } else if (numeroEntrada === "metros" && numeroSaida === "milimetros") {
      return quantidade * 1000;
    } else if (numeroEntrada === "quilometros" && numeroSaida === "metros") {
      return quantidade * 1000;
    } else if (numeroEntrada === "quilometros" && numeroSaida === "milimetros") {
      return quantidade * 1000000;
    } else if (numeroEntrada === "milimetros" && numeroSaida === "metros") {
      return quantidade / 1000;
    } else if (numeroEntrada === "milimetros" && numeroSaida === "quilometros") {
      return quantidade / 1000000;
    } else {
      return quantidade;
    }
  }
  const botaoConversao = document.getElementById("conversao");
  const quantidadeInput = document.getElementById("quantidade");
  const numeroEntradaSelect = document.getElementById("numero-entrada");
  const numeroSaidaSelect = document.getElementById("numero-saida");
  const resultadoP = document.getElementById("resultado");

    botaoConversao.addEventListener("click", function () {
    const quantidade = parseFloat(quantidadeInput.value);
    const numeroEntrada = numeroEntradaSelect.value;
    const numeroSaida = numeroSaidaSelect.value;

    const numeroConvertido = converterUnidades(quantidade, numeroEntrada, numeroSaida);

    resultadoP.innerHTML = `${quantidade} ${numeroEntrada} é equivalente a ${numeroConvertido} ${numeroSaida}`;
  });
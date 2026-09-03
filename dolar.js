function carregarDolar() {
    fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL').then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = "Valor do dia: " + "R$" + economia.USDBRL.bid
    document.getElementById('maiorDolar').innerHTML = "Maior valor: " + "R$" + economia.USDBRL.high
    document.getElementById('menorDolar').innerHTML = "Menor valor: " + "R$" + economia.USDBRL.low

    setTimeout(carregarDolar, 10000)
    })
}

carregarDolar()
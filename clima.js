async function getWeather(){
    //Criar variavel do valor inseri
    let cidade = document.getElementById('city').value

    //Conectar com a API - Clima
    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    console.log(resposta)

    //Variavel para consumir o JSON da temperatura
    let temmpCelsius = resposta.data.main.temp

    console.log(temmpCelsius);

    //Imprimir no FRONT END e concatenar com JQUERY
    document.getElementById('tempMundial').innerHTML = `A temperatura atual da cidade ${cidade} é: ${temmpCelsius.toFixed(0)} °C`
}

//Chamar a função
getWeather()
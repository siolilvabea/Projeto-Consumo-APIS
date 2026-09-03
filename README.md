# Projeto Consumo de APIs

Este é um projeto web desenvolvido com HTML, CSS e JavaScript que atua como um painel central para consumo de três APIs públicas diferentes.

---

## Funcionalidades

O projeto possui uma página inicial (`index.html`) que serve como menu para navegar entre as diferentes ferramentas[cite: 8]:

* **Consulta de CEP**: Permite digitar o CEP para preencher automaticamente os campos de endereço (rua, bairro, cidade e estado) utilizando a API do **ViaCEP**.
* **Cotação do Dólar**: Exibe o valor atual do Dólar (USD-BRL), além da máxima e da mínima do dia, consumindo a **AwesomeAPI** com atualização automática a cada 10 segundos[cite: 4, 7].
* **Previsão do Tempo**: Permite pesquisar a temperatura atual de qualquer cidade em tempo real consumindo a API da **OpenWeatherMap**[cite: 3, 6].

---

## Tecnologias Utilizadas

* **HTML5**: Estruturação das telas e formulários de consulta[cite: 2, 3, 4, 8].
* **CSS3**: Estilização responsiva e padronização dos botões e formulários[cite: 1].
* **JavaScript (ES6+)**: Lógica de integração com funções assíncronas (`async/await`) e manipulação do DOM[cite: 2, 5, 6].
* **Fetch API**: Utilizada para requisições assíncronas nas consultas de CEP e Cotação do Dólar[cite: 2, 5, 7].
* **Axios**: Biblioteca de cliente HTTP utilizada na integração com a API de Clima[cite: 3, 6].

---

## Estrutura do Projeto

* `index.html`: Página inicial com o menu de navegação[cite: 8].
* `API_CEP.html`: Interface para a consulta de CEP[cite: 2].
* `API_Clima.html`: Interface para a consulta do clima.
* `API_Dolar.html`: Interface para a consulta da cotação do dólar[cite: 4].
* `style.css`: Folha de estilo compartilhada entre as páginas[cite: 1].
* `cep.js`: Script responsável por consumir a API ViaCEP[cite: 5].
* `clima.js`: Script responsável por consumir a API OpenWeatherMap via Axios.
* `dolar.js`: Script responsável por consumir a AwesomeAPI.

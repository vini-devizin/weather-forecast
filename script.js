const apikey = "9f0c640c40c2c4582a628e2380fd8f6f" // a API key para conseguir se comunicar com o servidor da open weather map

function showweather(datas) { // mostra as informações
  document.querySelector("#nome").innerHTML = "tempo em " + datas.name;
  document.querySelector("#temperature").innerHTML = datas.main.temp + "°";
  document.querySelector("#weather").innerHTML = datas.weather[0].description;
  document.querySelector("#umidade").innerHTML = "umidade: " + datas.main.humidity + "%";
}

async function callapi(cidade) { // chama a API
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apikey}&lang=pt_br&units=metric`).then(resp => resp.json());
  showweather(dados);
}

function getcity() { // pega o valor do input
  const city = document.getElementById("city-input").value;
  callapi(city);
}
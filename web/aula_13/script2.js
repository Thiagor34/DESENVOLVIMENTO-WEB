let result = document.querySelector('.result');
let result_dois = document.querySelector('.result_dois');

async function getApi() {
    let response = await fetch(`https://raw.githubusercontent.com/LenaLatosinski/cardapio.json/main/cardapio.json`);
    let data = await response.json();

    for (var i = 0; i < data[`cardapio`].length; i++) {
        result.innerHTML += `<img src = "${data.cardapio[i].image}">`
        result_dois.innerHTML += `<h1>${data.cardapio[i].name}
    </h1><h3>${data.cardapio[i].price} 
    </h3><p>${data.cardapio[i].description}</p>`
    }
}

getApi();


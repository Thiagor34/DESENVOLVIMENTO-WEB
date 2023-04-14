let result = document.querySelector('.result');
let pesquisa = document.querySelector('.pesquisa');
let formulario = document.querySelector('.formulario');

async function getApi(cep) {
    let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    if (response.status === 200) {
        let data = await response.json();

        result.innerHTML = `<h1>Logradouro: ${data.logradouro}
                            </h1><h1>Bairro: ${data.bairro} 
                            </h1><h1>Localidade: ${data.localidade} 
                            </h1><h1>Estado: ${data.uf} 
                            </h1><h1>DDD: ${data.ddd}</h1>`
    } else {
        result.innerHTML = '<h1>CEP inválido</h1>'
    }
}


formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    getApi(pesquisa.value);
})

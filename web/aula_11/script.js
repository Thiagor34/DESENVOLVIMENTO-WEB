let botao = document.querySelector('.btn');
let n1 = document.querySelector('.n1');
let n2 = document.querySelector('.n2');
let resultado = document.getElementById('resultado');


//console.log(botao.innerHTML);
//console.log(principal);

function somar() { 
    var soma = parseInt(n1.value) + parseInt(n2.value);
    resultado.innerText = soma;    
}

function ligar_Desligar() {
    botao.classList.toggle('active');

}
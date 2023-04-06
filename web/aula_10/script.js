// alert('Hello world')

// const x = 0;
// x = 1;
// console.log(x);

var texto = 'texto';
var numero = 20;
var decimal = 20.5;
var boleano = true;
var nulo = null;
var indefinido;
var list = [1, 2, 3, 4, 5, 6];
var map = {
    'nome': 'thiago',
    'profissão': 'desenvolvedor'
}

console.log(typeof (texto));
console.log(typeof (numero));
console.log(typeof (decimal));
console.log(typeof (boleano));
console.log(typeof (nulo));
console.log(typeof (indefinido));

console.log(list[3])
console.log(map['profissão']);
console.log(typeof (map));
console.log(map.profissão);

var carros = ['Uno', 'Ferrari', 'Fusca', 'Gol'];
console.log(carros);
console.log(carros.length);

carros.push('Pálio');
console.log(carros);

carros.pop();
console.log(carros);

var removido = carros.pop();
console.log(carros);
console.log(removido);

var car = 'Honda Civic';
console.log(car.slice(0, 5));
console.log(car.toUpperCase());
console.log(car[0]);
console.log(car.replace('Honda', 'fiat'));

var x = 10;
var y = '10';
var z = 20;
console.log(x == z);
console.log(z > x);
console.log(x == y);
console.log(x === y);

if (x == y) {
    console.log('X é igual a Y');
}

x == y ? console.log('X é igual a Y') : console.log('X é diferente a Y');

x == z ? console.log('X é igual a Z') : x > z ? console.log('X maior que Z') : console.log('X é menor a Z');

var nome = prompt('Qual seu nome?');
console.log('Seu nome é: ', nome);
console.log(`Seu nome é: ${nome} `);

// var resposta = confirm('Deseja excluir o arquivo?');
// console.log(resposta);

if (confirm('Deseja excluir o arquivo?')) {
    console.log('arquivo deletado');
} else {
    console.log('arquivo não deletado');
}

for (var i = 0; i < 11; i++) {
    console.log(i);
}

var lista = ['maça', 'abacate', 'morango'];
for (var i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

var x = true;
var count = 0;

while (x === true) {
    console.log('Estou em laço');
    count++;
    if (count === 10) {
        x = false;
    }
}

function escrever(nome) {
    console.log(`Estou escrevendo... ${nome}`);
}

escrever('JavaScript');

const escrever1 = () => {
    console.log('Estou escrevendo 1');
}

escrever1();

console.log(p);
var p = 10;

function escrever2() {
    var x = 20;
    if (true) {
        console.log(x);
    }
    console.log(x);
}
escrever2();

function escrever3() {
    let s = 20;
    if (true) {
        let s = 10;
        console.log(s);
    }
    console.log(s);
}
escrever3();



async function getApi() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]['name']);
    }
}

getApi();


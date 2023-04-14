let hamburguer = document.querySelector('.hamburguer');
let menu = document.querySelector('.nav-menu');
let rigth = document.querySelector('.right');
let left = document.querySelector('.left');
let container = document.querySelector('.container');
let img = document.querySelectorAll('img');
let btn = document.querySelector('.btn')
let contador = 0;

hamburguer.addEventListener('click', () => {
    menu.classList.toggle('active')
    hamburguer.classList.toggle('active-icon')
})

rigth.addEventListener('click', () => {
    btn.classList.remove('inicio')
    contador++;
    container.style.transform = `translateX(${-600 * contador}px)`;
    if (contador > img.length - 1) {
        container.style.transform = `translateX(${0}px)`;
        contador = 0;
        btn.classList.add('inicio')
    }
})

left.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        container.style.transform = `translateX(${-600 * contador}px)`;
    }

    if (contador === 0) {
        btn.classList.add('inicio')
    }
})

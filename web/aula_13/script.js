let item = document.querySelectorAll('.item');
let pizza = document.querySelector('#Pizzas')
let pasteis = document.querySelector('#Pasteis')
let bebidas = document.querySelector('#Bebidas')

item.forEach((el) => {
    el.addEventListener('click', function (event){
       let selectedItem = event.target.innerHTML;

       item.forEach((el) => {
        if(selectedItem === el.innerHTML) {
            el.classList.add('active')
            if(selectedItem === 'Pizzas') {
                clear();
                pizza.style.display = 'block';
            } else if (selectedItem === 'Pastéis') {
                clear();
                pasteis.style.display = 'block';
            } else if (selectedItem === 'Bebidas') {
                clear();
                bebidas.style.display = 'block';
            }
        } else {
            el.classList.remove('active')
        }
        console.log(el.innerHTML);
       })
    })
})

function clear () {
    pizza.style.display = 'none';
    pasteis.style.display = 'none';
    bebidas.style.display = 'none';
}
const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');
const cross = document.querySelector('#crossmenu');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        burger.classList.add('hidden');
        cross.classList.remove('hidden');
    } else {
       menu.classList.add('hidden');
    }
})
cross.addEventListener('click', () => {
    menu.classList.add('hidden');
    burger.classList.remove('hidden');
    cross.classList.add('hidden');
})
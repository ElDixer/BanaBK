const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');

burger.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        burger.classList.add('hidden');
    } else {
        menu.classList.add('hidden');
    }
})
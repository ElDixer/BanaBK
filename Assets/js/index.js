const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');
const cross = document.querySelector('#crossmenu');

function openmenu() {
    menu.classList.remove('hidden');
    burger.classList.add('hidden');
    cross.classList.remove('hidden');
}
function closemenu() {
    menu.classList.add('hidden');
    burger.classList.remove('hidden');
    cross.classList.add('hidden');
}

burger.addEventListener("click", () =>{
    openmenu();
})

cross.addEventListener("click", () => {
    closemenu();
})

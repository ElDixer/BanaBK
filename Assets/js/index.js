const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');
const cross = document.querySelector('#crossmenu');

function openmenu() {
    menu.classList.remove('hidden');
    burger.classList.add('hidden');
    menu.classList.add('block')
    cross.classList.remove('hidden');
}
function closemenu() {
    menu.classList.add('hidden');
    burger.classList.remove('hidden');
    cross.classList.add('hidden');
}

burger.addEventListener("click", (e) =>{
    e.stopPropagation();
    openmenu();
})

cross.addEventListener("click", (e) => {
    e.stopPropagation();
    closemenu();
})
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

document.addEventListener("click", () =>{
    if (!menu.classList.contains('hidden')) {
          closemenu();
    }
})
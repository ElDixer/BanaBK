const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');
const cross = document.querySelector('#crossmenu');
const activepage = window.location.pathname.split("/").pop() || "index.html";
const mainimage = document.getElementById("mainimage");
const imagecarousel = document.querySelectorAll(".carousel");
let currentindex = 0;
const input = document.getElementById("input");
const moins = document.getElementById("moins");
const plus = document.getElementById("plus");

function openmenu() {
    menu.classList.remove('hidden');
    burger.classList.add('hidden');
    // menu.classList.add('block');
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

document.querySelectorAll(".navlink").forEach(link => {
    const href = link.getAttribute("href");
    
    if (href) {
        const linkpage = href.split("/").pop();

        if (linkpage === activepage) {
            link.classList.remove("bg-white");
            link.classList.add("bg-cyan-500");
        }
    }
})

imagecarousel.forEach(carousel => {
    carousel.addEventListener("click", () => {
        mainimage.src = carousel.src;
    })
})

setInterval(() => {
    currentindex++;
    if (currentindex >= imagecarousel.length) {
        currentindex = 0;
    }
    mainimage.src = imagecarousel[currentindex].src;
}, 2000);

plus.addEventListener("click", () =>{
    input.value = Number(input.value) + 1;
})

moins.addEventListener("click", () =>{
    if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
    } else {
        input.value = 0;
    }
})
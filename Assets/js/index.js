const burger = document.querySelector('#burgermenu');
const menu = document.querySelector('#menulist');
const cross = document.querySelector('#crossmenu');
const joinBtn = document.getElementById("join");

// Turn "/BanaBK/shop.html", "/BanaBK/shop", "/BanaBK/" or "/" into "shop.html" / "index.html"
function normalizePage(path) {
    let page = path.split("?")[0].split("#")[0].split("/").pop();
    if (!page) return "index.html";
    if (!page.includes(".")) page += ".html";
    return page.toLowerCase();
}

const activepage = normalizePage(window.location.pathname);


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

if (burger && menu && cross) {
    burger.addEventListener("click", (e) => {
        e.stopPropagation();
        openmenu();
    });

    cross.addEventListener("click", (e) => {
        e.stopPropagation();
        closemenu();
    });

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });

    document.addEventListener("click", () => {
        if (!menu.classList.contains('hidden')) {
            closemenu();
        }
    });
}

// Highlight the link of the page we are on (hamburger menu)
document.querySelectorAll(".navlink").forEach(link => {
    const href = link.getAttribute("href");
    if (!href) return;

    if (normalizePage(href) === activepage) {
        link.classList.remove("bg-white");
        link.classList.add("text-cyan-400");
    }
});


// "Rejoindre le mouvement" button exists only on the home page
if (joinBtn) {
    joinBtn.addEventListener("click", () => {
        const numeroWhatsApp = "243904550059";
        const message = `Bonjour, je souhaite rejoindre le mouvement !

Comment faire ?`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });
}

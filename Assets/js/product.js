const mainimage = document.getElementById("mainimage");
const imagecarousel = document.querySelectorAll(".carousel");
const input = document.getElementById("input");
const moins = document.getElementById("moins");
const plus = document.getElementById("plus");
const payerBtn = document.getElementById("payerBtn");


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

payerBtn.addEventListener("click", () => {

    const produit = "HOODIE COLLECTION";
    const prix = 15;

    const quantite = document.getElementById("input").value || 1;

    let taille = document.querySelectorAll(".size").forEach(size => {
        size.addEventListener("click", () => {
            taille = size.innerText;
        }); 
    });

    const numeroWhatsApp = "243904550059";

    const message = `Bonjour, je souhaite acheter :

    
Produit : ${produit}
Prix : ${prix}$
Quantité : ${quantite}
Taille : ${taille}

Merci.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

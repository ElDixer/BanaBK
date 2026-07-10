const mainimage = document.getElementById("mainimage");
const input = document.getElementById("quantityInput");
const moins = document.getElementById("decreaseQty");
const plus = document.getElementById("increaseQty");
const payerBtn = document.getElementById("payerBtn");

const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));



plus.addEventListener("click", () =>{
    input.value = Number(input.value) + 1;
})

moins.addEventListener("click", () =>{
    if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
    } else {
        input.value = 1;
    }
})

let taille = "";

document.querySelectorAll(".size-btn").forEach(btn => {

    btn.addEventListener("click", () => {
        taille = btn.textContent;
    });

});




const product = products.find(item => item.id === id);

if (!product) {
    window.location.href = "shop.html";
} else {

    mainimage.src = product.images[0];
    document.getElementById("productName").textContent = product.name;
    document.getElementById("productPrice").textContent = product.price;
    document.getElementById("productCategory").textContent = product.category;
    document.getElementById("productDescription").textContent = product.description;

    // gallery code
    // whatsapp code
}

payerBtn.addEventListener("click", () => {

    const produit = product.name;
    const prix = product.price;

    const quantite = input.value;

    const numeroWhatsApp = "243904550059";

    const message = `Bonjour, je souhaite acheter :

    
Produit : ${produit}
Prix : ${prix}
Quantité : ${quantite}
Taille : ${taille}

Merci.`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
});

const gallery = document.getElementById("gallery");

product.images.forEach(image => {
    const img = document.createElement("img");

    img.src = image;
    img.className = "thumbnail w-full aspect-square object-cover cursor-pointer";

    img.addEventListener("click", () => {
        mainimage.src = image;
    });

    gallery.appendChild(img);
});
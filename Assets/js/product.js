const mainimage = document.getElementById("mainimage");
const imagecarousel = document.querySelectorAll(".carousel");
const input = document.getElementById("input");
const moins = document.getElementById("moins");
const plus = document.getElementById("plus");
const payerBtn = document.getElementById("payerBtn");
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));



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

const products = [
    {
        id: 1,
        name: "BatotoYaBk Tshirt Noir",
        price: "$15",
        material: "Premium Cotton",
        image: "./Assets/images/batoto ya bk black.png",
        category: "hoodie"
    },

    {
        id: 2,
        name: "BatotoYaBk tshirt Navy",
        price: "$15",
        material: "Premium Cotton",
        image: "./Assets/images/batoto ya bk color.png",
        category: "tshirt"
    },

    {
        id: 3,
        name: "BatotoYaBk tshirt rouge",
        price: "$15",
        material: "Premium Cotton",
        image: "./Assets/images/batoto ya bk red.png",
        category: "tshirt"
    },

    {
        id: 4,
        name: "BatotoYaBk tshirt blanc",
        price: "$15",
        material: "Premium Cotton",
        image: "./Assets/images/batoto ya bk white.png",
        category: "Tshirt"
    }
];

const product = products.find(item => item.id === id);

document.getElementById("productImage").src = product.image;
document.getElementById("productName").textContent = product.name;
document.getElementById("productPrice").textContent = product.price;



const search = document.getElementById("searchInput");

search.addEventListener("input", function () {

    const keyword = this.value.toLowerCase();

    document.querySelectorAll(".product-card").forEach(card => {

        const title = card.querySelector("h3").textContent.toLowerCase();

        if (title.includes(keyword)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});



const buttons = document.querySelectorAll("[data-category]");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        document.querySelectorAll(".product-card").forEach(card => {

            if (
                category === "all" ||
                card.dataset.category === category
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
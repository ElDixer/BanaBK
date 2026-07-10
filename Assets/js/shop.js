
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
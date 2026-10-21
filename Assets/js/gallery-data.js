/* ------------------------------------------------------------------
   GALERIE BanaBK : liste des photos, partagée par gallery.html et index.html.
   Pour ajouter une photo, ajoutez UNE ligne dans `items` :
   - src      : chemin de l'image
   - title    : légende affichée au survol et dans l'aperçu
   - category : "collection", "nfc", "communaute" ou "culture"
                (ou une nouvelle catégorie : déclarez-la aussi dans `categories`)
   - featured : true = grande vignette (2x2)
   Les photos affichées en premier apparaissent aussi sur la page d'accueil.
   Ces images sont celles déjà présentes sur le site : remplacez-les
   par vos vraies photos quand vous les avez.
------------------------------------------------------------------ */
const BanaGallery = {
    categories: [
        { id: "all", label: "Tout" },
        { id: "collection", label: "Collection" },
        { id: "nfc", label: "NFC" },
        { id: "communaute", label: "Communauté" },
        { id: "culture", label: "Culture" }
    ],

    items: [
        { src: "./Assets/images/batoto ya bk black.png", title: "BanaBK noir", category: "collection", featured: true },
        { src: "./Assets/images/batoto ya bk color.png", title: "BanaBK navy", category: "collection" },
        { src: "./Assets/images/batoto ya bk red.png", title: "BanaBK rouge", category: "collection" },
        { src: "./Assets/images/elechip.png", title: "La puce NFC intégrée", category: "nfc", featured: true },
        { src: "./Assets/images/batoto ya bk white.png", title: "BanaBK blanc", category: "collection" },
        { src: "./Assets/images/helping.png", title: "Solidarité à Bukavu", category: "communaute" },
        { src: "./Assets/images/education.png", title: "Éducation pour tous", category: "communaute" },
        { src: "./Assets/images/medical.png", title: "Aide médicale d'urgence", category: "communaute" },
        { src: "./Assets/images/entrepreneuriat.png", title: "Entrepreneuriat local", category: "communaute" },
        { src: "./Assets/images/communaute.png", title: "Projets communautaires", category: "communaute" },
        { src: "./Assets/images/afriq.jpg", title: "Fierté bukavienne", category: "culture" }
    ],

    // A normal tile takes 1 grid cell, a featured tile takes 4 (2x2).
    // 12 cells fill whole rows at 2, 3 and 4 columns.
    PAGE_CELLS: 12,

    cellsOf: function (item) {
        return item.featured ? 4 : 1;
    },

    label: function (id) {
        const c = BanaGallery.categories.find(function (x) { return x.id === id; });
        return c ? c.label : id;
    },

    // The first `budget` cells' worth of photos from `list` (stops before a photo that would not fit).
    firstCells: function (list, budget) {
        let cells = 0;
        const out = [];
        for (let i = 0; i < list.length; i++) {
            const size = BanaGallery.cellsOf(list[i]);
            if (cells + size > budget) break;
            cells += size;
            out.push(list[i]);
        }
        return out;
    },

    // Builds one gallery tile. tag = "button" (gallery page, opens the lightbox) or "a" (home page, links to href).
    createTile: function (item, tag, href) {
        const tile = document.createElement(tag);
        if (tag === "a") {
            tile.href = href || "./gallery.html";
            tile.setAttribute("aria-label", "Voir la galerie : " + item.title);
        } else {
            tile.type = "button";
            tile.setAttribute("aria-label", "Agrandir la photo : " + item.title);
        }
        tile.className = "gallery-item group relative block overflow-hidden rounded-xl border border-gray-600 bg-[#10274b]/40 aspect-square text-left " +
            (item.featured ? "col-span-2 row-span-2" : "");

        const img = document.createElement("img");
        img.src = item.src;
        img.alt = item.title;
        img.loading = "lazy";
        img.decoding = "async";
        img.className = "absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-500";
        tile.appendChild(img);

        const shade = document.createElement("div");
        shade.className = "absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/10 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 group-focus-visible:opacity-100 transition duration-300";
        tile.appendChild(shade);

        const caption = document.createElement("div");
        caption.className = "absolute bottom-0 inset-x-0 p-3 sm:p-4 opacity-100 md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition duration-300";
        const cat = document.createElement("span");
        cat.className = "block text-[11px] uppercase tracking-widest text-cyan-400 font-semibold";
        cat.textContent = BanaGallery.label(item.category);
        const title = document.createElement("span");
        title.className = "block mt-0.5 font-semibold text-sm sm:text-base";
        title.textContent = item.title;
        caption.appendChild(cat);
        caption.appendChild(title);
        tile.appendChild(caption);

        return tile;
    }
};

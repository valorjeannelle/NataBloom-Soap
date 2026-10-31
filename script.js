
const cartes = document.querySelectorAll(".carte");
const boutonMenu = document.querySelector(".menu-hamburger");
const navigation = document.querySelector("#navigation-principale");

const musique = document.querySelector("#musique-ambiance");

//Gestion menu (bouton hamburger)
boutonMenu.addEventListener("click", () => {
    navigation.classList.toggle("ouvert");

    const menuOuvert = navigation.classList.contains("ouvert");

    boutonMenu.setAttribute("aria-expanded", menuOuvert);
    boutonMenu.setAttribute(
        "aria-label",
        menuOuvert ? "Fermer le menu" : "Ouvrir le menu"
    );
});

//Selectionner les cartes produits à appliquer l'effet de retournement
cartes.forEach((carte) => {
    const indice = carte.querySelector(".indice");
    const verso = carte.querySelector(".carte-verso");

    // Retourner la carte depuis le texte
    indice.addEventListener("click", (event) => {
        event.stopPropagation();
        carte.classList.add("retournee");
    });

    // Revenir au recto en cliquant sur le verso
    verso.addEventListener("click", () => {
        carte.classList.remove("retournee");
    });
});


//Fonction pour gerer les modales
function creerModal(image1, image2,prix1,prix2) {

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const contenu = document.createElement("div");
    contenu.classList.add("modal-content");

    const savons = [
        {
            image: image1,
            format: "Rond avec fleur",
            prix: prix1
        },
        {
            image: image2,
            format: "Rectangulaire",
            prix: prix2
        }
    ];

    const conteneur = document.createElement("div");
    conteneur.classList.add("soap-container");

    savons.forEach((savon) => {

        const carte = document.createElement("div");
        carte.classList.add("soap-card");

        const img = document.createElement("img");
        img.src = savon.image;
        img.alt = `Savon ${savon.format}`;

        const format = document.createElement("p");
        format.textContent = savon.format;

        const prix = document.createElement("p");
        prix.textContent = savon.prix;

        carte.append(img, format, prix);
        conteneur.appendChild(carte);
    });

    const fermer = document.createElement("button");
    fermer.textContent = "Fermer";
    fermer.setAttribute("aria-label", "Fermer le modal");

    fermer.addEventListener("click", () => {
        modal.remove();
    });

    contenu.append(conteneur, fermer);
    modal.appendChild(contenu);

    document.body.appendChild(modal);

    return modal;
}

//Modale de chaque savons
// Récupération des boutons
const boutonsModal = document.querySelectorAll(".ouvrir-modal");

// Événement au clic
boutonsModal.forEach((bouton) => {

    bouton.addEventListener("click", () => {

        switch (bouton.id) {

            case "eclat-curcuma":
                creerModal(
                    "images/rond_curcuma.jpg",
                    "images/rectangle_curcuma.jpg",
                    "1 000FCFA",
                    "1 500FCFA"
                );
                break;

            case "perle-riz":
                creerModal(
                    "images/rond_perle_riz.jpg",
                    "images/rectangle_perle_riz.jpg",
                    "1 000FCFA",
                    "1 500FCFA"
                );
                break;

            case "avoine-karite":
                creerModal(
                    "images/rond_avoine_karité.jpg",
                    "images/rectangle_avoine_karité.jpg",
                    "1 000FCFA",
                    "1 500FCFA"
                );
                break;
        }

    });

});
function createGallery(context) {
    let gallery

    if (context === "modal") {
        // Création de la galerie de la modale
        gallery = document.createElement("div")
        gallery.classList.add("modal-gallery")
    } else {
        // Récupération de la galerie dans le DOM
        gallery = document.querySelector(".gallery")
    }

    return gallery
}

function createElements(works, context, gallery) {
    works.forEach(article => {
        // Création d’une balise figure
        const figure = document.createElement("figure")
        figure.dataset.id = article.id

        // Création et rattachement des éléments à l'intérieur de la figure 
        const image = document.createElement("img")
        image.src = article.imageUrl
        figure.appendChild(image)

        if (context === "modal") {
            const button = document.createElement("button")
            button.innerHTML = `<img src="./assets/icons/trashcan.png" alt="Supprimer l'image">`
            button.dataset.id = article.id
            figure.appendChild(button)
        } else {
            const caption = document.createElement("figcaption")
            caption.innerText = article.title
            figure.appendChild(caption)
        }

        // Rattachement de la figure à la div
        gallery.appendChild(figure)
    })
}

export default function initGallery(works, context) {
    const gallery = createGallery(context)
    gallery.innerHTML = ""

    createElements(works, context, gallery)

    // Récupération de la galerie créée
    if (context === "modal") {
        return gallery
    }
}
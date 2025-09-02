import { galleries } from "../../dom-elements.js"
import { deleteImage } from "./admin/logic.js"

export function initGallery(works, context) {
    const gallery = galleries[context]
    gallery.innerHTML = ""

    createGalleryFigures(works, context, gallery)
}

export function addWorkToGalleries(work) {
    Object.entries(galleries).forEach(([context, gallery]) => createGalleryFigures([work], context, gallery))
}

function createGalleryFigures(works, context, gallery) {
    works.forEach(article => {
        // Création d’une balise figure
        const figure = document.createElement("figure")
        figure.dataset.id = article.id

        createFigureElements(context, article, figure)

        // Rattachement de la figure à la galerie
        gallery.appendChild(figure)
    })
}

function createFigureElements(context, article, figure) {
    // Création des éléments à l'intérieur de la figure 
    const image = document.createElement("img")
    image.src = article.imageUrl
    
    // Élément différent selon le contexte
    let element
    if (context === "modal") {
        element = document.createElement("button")
        element.dataset.id = article.id
        element.addEventListener("click", async () => await deleteImage(element.dataset.id))
    } else if (context === "homepage") {
        element = document.createElement("figcaption")
        element.innerText = article.title
    }

    // Rattachement des éléments créés à la figure
    figure.appendChild(image)
    figure.appendChild(element)
}
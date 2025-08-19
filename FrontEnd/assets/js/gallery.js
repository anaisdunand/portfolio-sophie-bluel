export function createGallery(works) {
    // Récupération de la div qui accueillera la galerie
    const divGallery = document.querySelector(".gallery")
    divGallery.innerHTML = ""
    
    for (let i = 0; i < works.length; i++) {
        const article = works[i]

        // Création d’une balise figure
        const galleryElement = document.createElement("figure")
        galleryElement.dataset.id = article.id

        // Création des éléments à l'intérieur de la figure 
        const imageElement = document.createElement("img")
        imageElement.src = article.imageUrl
        const captionElement = document.createElement("figcaption")
        captionElement.innerText = article.title

        // Rattachement des éléments dans la balise, et de la balise à la div
        galleryElement.appendChild(imageElement)
        galleryElement.appendChild(captionElement)
        divGallery.appendChild(galleryElement)
    }
}
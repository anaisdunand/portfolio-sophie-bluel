import { filters } from "../../dom-elements.js"
import { initGallery } from "./gallery.js"

export default function initFilters(categories, works) {
    createFilters(categories)
    filterWorks(works)
}

function createFilters(categories) {
    // Ajout du bouton "Tous"
    const allButton = createButton("0", "Tous")
    allButton.classList.add("active")

    // Ajout des autres boutons
    categories.forEach(button => createButton(button.id, button.name))
}

function createButton(id, text) {
    // Création d'un bouton
    const button = document.createElement("button")
    button.dataset.id = id
    button.innerText = text
    filters.appendChild(button)

    // Récupération du bouton
    return button
}

function filterWorks(works) {
    const filtersList = document.querySelectorAll(".filters button")
    filtersList.forEach(button => {
        button.addEventListener("click", (event) => {
            // Ajout de la classe "active" au bouton cliqué
            filtersList.forEach(button => button.classList.remove("active"))
            event.target.classList.add("active")

            // Vérification de l'id du bouton cliqué et filtrage des éléments en fonction
            const filterId = event.target.dataset.id
            
            if (filterId === "0") initGallery(works, "homepage")
            else {
                const filteredWorks = works.filter(work => work.categoryId === Number(filterId))
                initGallery(filteredWorks, "homepage")
            }
        })
    })
}
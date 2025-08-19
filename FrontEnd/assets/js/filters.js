import { createGallery } from "./gallery.js"

export function createButtons(categories) {
    // Récupération de la div qui accueillera les filtres
    const divFilters = document.querySelector(".filters")

    // Création du bouton "Tous"
    const allButton = document.createElement("button")
    allButton.dataset.id = "all"
    allButton.innerText = "Tous"
    allButton.classList.add("active")

    divFilters.appendChild(allButton)

    // Création des boutons filtres
    for (let i = 0; i < categories.length; i++) {
        const article = categories[i]

        const filterButton = document.createElement("button")
        filterButton.dataset.id = article.id
        filterButton.innerText = article.name

        divFilters.appendChild(filterButton)
    }
}

export function filterWorks(works) {
    // Récupération de la liste des boutons
    const filters = document.querySelectorAll(".filters button")

    // Vérification de l'id du bouton cliqué et filtrage des éléments en fonction
    filters.forEach(button => {
        button.addEventListener("click", (event) => {
            const filterId = event.target.dataset.id

            filters.forEach(button => button.classList.remove("active"))
            event.target.classList.add("active")

            if (filterId === "all") {
                createGallery(works)
            } else {
                const filteredWorks = works.filter(work => work.categoryId === Number(filterId))
                createGallery(filteredWorks)
            }
        })
    })
}
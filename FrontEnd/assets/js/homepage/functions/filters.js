import createGallery from "./gallery.js"

function activateFilters(works) {
    const filtersList = document.querySelectorAll(".filters button")

    // Vérification de l'id du bouton cliqué et filtrage des éléments en fonction
    filtersList.forEach(button => {
        button.addEventListener("click", (event) => {
            const filterId = event.target.dataset.id

            filtersList.forEach(button => button.classList.remove("active"))
            event.target.classList.add("active")

            if (filterId === "all") {
                createGallery(works, "homepage")
            } else {
                const filteredWorks = works.filter(work => work.categoryId === Number(filterId))
                createGallery(filteredWorks)
            }
        })
    })
}

export default function createFilters(categories, works) {
    const filters = document.querySelector(".filters")

    // Création du bouton "Tous"
    const allButton = document.createElement("button")
    allButton.dataset.id = "all"
    allButton.innerText = "Tous"
    allButton.classList.add("active")

    filters.appendChild(allButton)

    // Création des autres boutons
    categories.forEach(button => {
        const filterButton = document.createElement("button")
        filterButton.dataset.id = button.id
        filterButton.innerText = button.name

        filters.appendChild(filterButton)
    })

    activateFilters(works)
}
import initGallery from "./functions/gallery.js"
import createFilters from "./functions/filters.js"
import initEditMode from "./functions/admin.js"

document.addEventListener("DOMContentLoaded", async () => {
    // Récupération des projets
    const worksResponse = await fetch("http://localhost:5678/api/works")
    const works = await worksResponse.json()

    // Récupération des catégories
    const categoriesResponse = await fetch("http://localhost:5678/api/categories")
    const categories = await categoriesResponse.json()

    initGallery(works, "homepage")

    // Vérification de la connexion de l'utilisateur
    const token = localStorage.getItem("token")

    if (token) {
        initEditMode(works)
    } else {
        createFilters(categories, works)
    }
})
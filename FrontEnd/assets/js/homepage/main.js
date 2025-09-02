import { getRequest, getToken } from "../api.js"
import { initGallery } from "./functions/gallery.js"
import initAdminPage from "./functions/admin/index.js"
import initFilters from "./functions/filters.js"

document.addEventListener("DOMContentLoaded", async () => {
    const works = await getRequest("works")
    const categories = await getRequest("categories")

    initGallery(works, "homepage")

    // Vérification de la connexion de l'utilisateur
    const token = getToken()
    
    if (token) initAdminPage(works, categories)
    else initFilters(categories, works)
})
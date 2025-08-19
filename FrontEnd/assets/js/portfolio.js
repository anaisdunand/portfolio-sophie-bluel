import { createGallery } from "./gallery.js"
import { createButtons, filterWorks } from "./filters.js"

// Récupération des projets
const worksResponse = await fetch("http://localhost:5678/api/works")
const works = await worksResponse.json()
createGallery(works)

// Récupération des catégories
const categoriesResponse = await fetch("http://localhost:5678/api/categories")
const categories = await categoriesResponse.json()
createButtons(categories)

// Activation des boutons filtres
filterWorks(works)
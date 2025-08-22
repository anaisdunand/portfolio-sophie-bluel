import openModal from "./modal.js"

function createEditMode() {
    // Création des éléments
    const editBar = document.createElement("div")
    editBar.innerHTML = `<img src="./assets/icons/edit-white.png" alt="Icône d'édition">Mode édition`
    editBar.classList.add("edit-bar")

    const editButton = document.createElement("button")
    editButton.innerHTML = `<img src="./assets/icons/edit-black.png" alt="Icône d'édition"> modifier`
    editButton.classList.add("edit-button")

    // Ajout des éléments dans le DOM
    const header = document.querySelector("header")
    header.before(editBar)
    const title = document.querySelector("#portfolio h2")
    title.appendChild(editButton)

    // Modification du bouton de connexion
    const logButton = document.querySelector(".log-button")
    logButton.innerText = "logout"
    logButton.href = "#"

    // Récupération des boutons
    return { editButton, logButton }
}

export default function initEditMode(works) {
    const { editButton, logButton } = createEditMode()

    // Déconnexion
    logButton.addEventListener("click", () => {
        localStorage.removeItem("token")
        window.location.reload()
    })
    
    // Ouverture de la modale
    editButton.addEventListener("click", () => {
        openModal(works)
    })
}
import initGallery from "./gallery.js"

const modalBackground = document.getElementById("edit-mode")
const modal = document.querySelector(".modal")

function createElements() {
    // Création des éléments de la modale
    const closeButton = document.createElement("button")
    closeButton.classList.add("close-button")
    closeButton.innerHTML = `<img src="./assets/icons/xmark.png" alt="Fermer la modale">`

    const title = document.createElement("h3")
    title.innerText = "Galerie"

    const addButton = document.createElement("button")
    addButton.classList.add("add-button")
    addButton.innerText = "Ajouter une photo"

    // Récupération des éléments créés
    return { closeButton, title, addButton }
}

function renderContent(closeButton, title, gallery, addButton) {
    // Rattachement des éléments à la modale
    modal.appendChild(closeButton)
    modal.appendChild(title)
    modal.appendChild(gallery)
    modal.appendChild(addButton)
}

function closeModal() {
    modal.innerHTML = ""
    modalBackground.classList.add("hidden")
}

function setupModalListeners(closeButton) {
    [closeButton, modalBackground].forEach(element => {
        element.addEventListener("click", (event) => {
            // Si le clic se fait sur le fond de la modale, ou sur le bouton croix, la modale se ferme
            if (event.target === modalBackground || event.currentTarget === closeButton) { 
                closeModal()
            }
        })
    })
}

function initModal(works) {
    const { closeButton, title, addButton } = createElements()
    const gallery = initGallery(works, "modal")
    renderContent(closeButton, title, gallery, addButton)
    setupModalListeners(closeButton)
}

export default function openModal(works) {
    initModal(works)
    modalBackground.classList.remove("hidden")
}

// async function deleteImage() {
//     const deleteButtons = document.querySelectorAll(".gallery button")

//     deleteButtons.forEach(button => {
//         button.addEventListener("click", (event) => {

//         })
//     })
// }
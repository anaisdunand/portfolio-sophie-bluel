import {
    addButton, backButton, closingElements, // éléments de la modale
    modalForm, imageInput, categorySelect, formInputs // éléments du formulaire de la modale
} from "../../../dom-elements.js"
import { initGallery } from "../gallery.js"
import { switchModalContent, closeModal, showImagePreview, checkForm, sendForm } from "./logic.js"

export default function initModal(works, categories) {
    // Ajout de contenu à la modale
    initGallery(works, "modal")
    addSelectOptions(categories)

    // Ajout des listeners
    setupModalListeners()
    setupFormListeners()
}

function addSelectOptions(categories) {
    // Ajout d'une option vide (sélectionnée par défaut)
    createOption("0", "")

    // Ajout des autres options
    categories.forEach(option => createOption(option.id, option.name))
}

function createOption(id, name) {
    // Création d'une option
    const option = document.createElement("option")
    option.dataset.id = id
    option.value = name
    option.innerText = name
    
    categorySelect.appendChild(option)
}

function setupModalListeners() {
    // Ouverture du formulaire
    addButton.addEventListener("click", () => switchModalContent("forward"))

    // Retour à la galerie de la modale
    backButton.addEventListener("click", () => switchModalContent("backward"))

    // Fermeture de la modale
    closingElements.forEach(element => {
        element.addEventListener("click", (event) => {
            if (event.target === element) closeModal()
        })
    })
}

function setupFormListeners() {
    // Preview de l'image à uploader
    imageInput.addEventListener("change", () => showImagePreview())

    // Vérification du remplissage du formulaire
    formInputs.forEach(element => {
        element.addEventListener("change", () => checkForm())
    })

    // Upload d'une nouvelle image
    modalForm.addEventListener("submit", async (event) => {
        event.preventDefault()
        await sendForm()
    })
}
import {
    modalBackground, modalTitle, modalContent, modalForm, backButton, // éléments de la modale
    uploadButton, imageInput, imagePreview, uploadHint, titleInput, categorySelect, submitButton // éléments du formulaire de la modale
} from "../../../dom-elements.js"
import { deleteRequest, postRequest } from "../../../api.js"
import { addWorkToGalleries } from "../gallery.js"

export function openModal() {
    modalBackground.classList.remove("nodisplay")
}

export function switchModalContent(context) {
    if (context === "forward") {
        modalTitle.innerText = "Ajout photo"
        modalContent.forEach(element => element.classList.add("translate"))
        backButton.classList.remove("hidden")
    } else if (context === "backward") {
        modalTitle.innerText = "Galerie photos"
        modalContent.forEach(element => element.classList.remove("translate"))
        backButton.classList.add("hidden")
    }
}

export function closeModal() {
    switchModalContent("backward")
    modalBackground.classList.add("nodisplay")
}

export async function deleteImage(id) {
    const deleteResponse = await deleteRequest(id)

    if (deleteResponse.ok) {
        // Supprimer du DOM toutes les figures portant cet id
        const figures = document.querySelectorAll(`figure[data-id="${id}"]`)
        figures.forEach(figure => figure.remove())
    }
}

export function showImagePreview() {
    const image = imageInput.files[0]
    const maxSize = 4 * 1024 * 1024 // 4mo en octets
    const allowedTypes = ["image/jpg", "image/png"]
    
    // Affichage de l'aperçu si le fichier correspond (taille < 4mo et type jpg / png)
    if (image && (image.size <= maxSize) && (allowedTypes.includes(image.type))) {
        imagePreview.src = URL.createObjectURL(image)
        imagePreview.classList.remove("hidden")
    
        uploadButton.classList.add("hidden")
    } else {
        imageInput.value = ""
        uploadHint.classList.add("error")
    }
}

export function checkForm() {
    const imageSelected = imageInput.files.length === 1
    const titleFilled = titleInput.value.trim() !== ""
    const categorySelected = categorySelect.value !== ""
    
    // Active le bouton seulement si tous les champs sont remplis
    if (imageSelected && titleFilled && categorySelected) {
        submitButton.disabled = false
        submitButton.classList.remove("grey")
    } else {
        submitButton.disabled = true
        submitButton.classList.add("grey")
    }
}

export async function sendForm() {
    const formData = createFormData()
    const postResponse = await postRequest(formData)

    if (postResponse.ok) {
        // Ajout de la nouvelle image aux galeries
        const newWork = await postResponse.json()
        addWorkToGalleries(newWork)

        resetForm()
    }
}

function createFormData() {
    const selectedOption = categorySelect.options[categorySelect.selectedIndex]
    const categoryId = parseInt(selectedOption.dataset.id, 10)

    // Création de l'objet FormData
    const formData = new FormData()
    formData.append("image", imageInput.files[0])
    formData.append("title", titleInput.value.trim())
    formData.append("category", categoryId)

    return formData
}

function resetForm() {
    modalForm.reset()
    imagePreview.src = ""
    imagePreview.classList.add("hidden")
    uploadButton.classList.remove("hidden")
    uploadHint.classList.remove("error")
}
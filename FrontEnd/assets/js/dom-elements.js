// Homepage
export const logButton = document.querySelector(".log-button")
export const filters = document.querySelector(".filters")
export const mainGallery = document.querySelector(".gallery")

// Homepage - mode édition
export const editBar = document.getElementById("edit-bar")
export const editButton = document.querySelector(".edit-button")


// Modale
export const modalBackground = document.getElementById("modal")
export const modalTitle = document.querySelector(".modal h3")

export const modalContent = document.querySelectorAll(".content .main, .content form")
export const modalGallery = document.querySelector(".modal-gallery")
export const modalForm = document.querySelector(".content form")

// Modale - boutons
export const addButton = document.querySelector(".add-button")
export const backButton = document.querySelector(".back-button")
export const closeButton = document.querySelector(".close-button")

export const closingElements = [closeButton, modalBackground]

// Modale - formulaire
export const uploadButton = document.querySelector(".upload-box label")
export const imageInput = document.querySelector(".upload-box input")
export const imagePreview = document.querySelector(".upload-box img")
export const uploadHint = document.querySelector(".upload-box p")

export const titleInput = document.querySelector(`.content input[type="text"]`)
export const categorySelect = document.querySelector(".content select")
export const formInputs = [imageInput, titleInput, categorySelect]

export const submitButton = document.querySelector(`.content input[type="submit"]`)


// Homepage & Modale - galeries
export const galleries = {
    modal: modalGallery,
    homepage: mainGallery
}


// Login
export const loginForm = document.querySelector("#login form")